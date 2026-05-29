using Microsoft.EntityFrameworkCore;
using Portfolio.Domain.Entities;
using Portfolio.Infra.Data;

namespace Portfolio.API.Endpoints;

public static class ProjetosEndpoints
{
    public static void MapProjetosEndpoints(this WebApplication app)
    {
        // Cria um grupo base para não precisar repetir "/api/projetos" em toda rota
        var group = app.MapGroup("/api/projetos");

        // 1. Rota GET: Retorna a lista de todos os projetos para o seu Frontend (React)
        group.MapGet("/", async (AppDbContext db) =>
        {
            var projetos = await db.Projetos.ToListAsync();
            return Results.Ok(projetos);
        });

        // 2. Rota POST: Adiciona um projeto novo no banco de dados
        group.MapPost("/", async (Projeto projeto, AppDbContext db) =>
        {
            db.Projetos.Add(projeto);
            await db.SaveChangesAsync();
            return Results.Created($"/api/projetos/{projeto.Id}", projeto);
        });
    }
}