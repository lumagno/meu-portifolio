using Microsoft.EntityFrameworkCore;
using Portfolio.API.Endpoints; 
using Portfolio.Infra.Data;
using Portfolio.Domain.Entities;
using System.Text.Json; // Adicionado para o conversor JSON
using System.Text;      // Adicionado para a formatação de texto

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(connectionString));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configuramos a Política de Segurança (CORS) - Unificamos para usar apenas a mais segura
builder.Services.AddCors(options =>
{
    options.AddPolicy("PoliticaSegura", policy =>
    {
        policy.WithOrigins(
                "http://localhost:3000", // Libera o React rodando no seu PC
                "https://luizmagnagnagno.workers.dev" // Libera o seu site oficial na Vercel futuramente
              )
              .AllowAnyHeader()
              .AllowAnyMethod(); // Permite GET, POST, etc.
    });
});

// ================================================================
// A PARTIR DESTA LINHA, O "app" É CRIADO. 
// TUDO QUE USA "app." DEVE FICAR ABAIXO DAQUI!
// ================================================================
var app = builder.Build();

// Configura o Swagger para testes locais
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Ativa a segurança (CORS)
app.UseCors("PoliticaSegura");

// Registra as suas rotas de projetos que já existiam!
app.MapProjetosEndpoints();

// Adicionamos "Task<IResult>" aqui para corrigir aquele erro de conversão async
app.MapPost("/api/contato", async Task<IResult> (AppDbContext context, Contato novaMensagem) =>
{
    // 1. VALIDAÇÃO BÁSICA
    if (string.IsNullOrWhiteSpace(novaMensagem.Nome) || string.IsNullOrWhiteSpace(novaMensagem.Email))
        return Results.BadRequest("Nome e Email são obrigatórios.");

    // 2. GUARDAR NO BANCO DE DADOS (SQLite)
    context.Contatos.Add(novaMensagem);
    await context.SaveChangesAsync();

    // 3. ENVIAR PARA O FORMSPREE (E-mail)
    try
    {
        using var httpClient = new HttpClient();
        var formspreeUrl = "https://formspree.io/f/SEU_CODIGO_AQUI"; // <-- NÃO ESQUEÇA DE COLOCAR O SEU LINK AQUI
        
        var jsonParaEnviar = JsonSerializer.Serialize(new { 
            nome = novaMensagem.Nome, 
            email = novaMensagem.Email, 
            mensagem = novaMensagem.Mensagem 
        });
        
        var conteudo = new StringContent(jsonParaEnviar, Encoding.UTF8, "application/json");
        
        // Dispara para o Formspree e não trava a aplicação se o Formspree demorar
        await httpClient.PostAsync(formspreeUrl, conteudo);
    }
    catch (Exception ex)
    {
        // Se o e-mail falhar, nós guardámos no banco na mesma, então não quebramos a aplicação
        Console.WriteLine($"Erro ao enviar e-mail: {ex.Message}");
    }

    // 4. DEVOLVER SUCESSO AO REACT
    return Results.Created($"/api/contato/{novaMensagem.Id}", novaMensagem);
});

// Roda a aplicação
app.Run();