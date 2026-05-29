using Microsoft.EntityFrameworkCore;
using Portfolio.API.Endpoints; // Adicione este using
using Portfolio.Infra.Data;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(connectionString));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirFrontend", policy =>
    {
        // A porta 5173 é o padrão do Vite/React. 
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configura o Swagger para testes locais
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Ativa o CORS configurado acima
app.UseCors("PermitirFrontend");
// Registra as suas rotas aqui!
app.MapProjetosEndpoints();

app.Run();