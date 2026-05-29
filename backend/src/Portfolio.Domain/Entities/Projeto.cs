namespace Portfolio.Domain.Entities;

public class Projeto
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    public string Tecnologias { get; set; } = string.Empty; // Ex: "React, .NET, SQLite"
    public string LinkRepo { get; set; } = string.Empty;
    public string? ImagemUrl { get; set; } // Opcional
}