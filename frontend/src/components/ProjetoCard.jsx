export function ProjetoCard({ projeto }) {
  return (
    <div style={{ 
      border: '1px solid #444', 
      padding: '25px', 
      borderRadius: '12px', 
      backgroundColor: '#1a1a1a',
      transition: 'transform 0.2s' // Dá um efeitinho suave
    }}>
      <h2 style={{ color: '#00A3FF', marginTop: 0 }}>{projeto.titulo}</h2>
      <p style={{ lineHeight: '1.6', color: '#ddd' }}>{projeto.descricao}</p>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '10px 15px', 
        backgroundColor: '#2a2a2a', 
        borderRadius: '8px',
        fontSize: '0.9rem'
      }}>
        <strong style={{ color: '#CCFF00' }}>Stack:</strong> {projeto.tecnologias}
      </div>

      {/* Só renderiza o botão se houver um link para o repositório */}
      {projeto.linkRepo && (
        <a 
          href={projeto.linkRepo} 
          target="_blank" 
          rel="noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            color: '#fff',
            textDecoration: 'none',
            borderBottom: '1px solid #00A3FF',
            paddingBottom: '2px'
          }}
        >
          Ver no GitHub →
        </a>
      )}
    </div>
  );
}