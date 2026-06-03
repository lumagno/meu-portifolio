export function ProjetoCard({ projeto }) {
  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      borderRadius: '12px',
      border: '1px solid #333',
      padding: '25px',
      // As 4 linhas abaixo são a mágica do tamanho igual:
      display: 'flex',
      flexDirection: 'column', 
      width: '100%',
      height: '100%', 
      boxSizing: 'border-box',
      transition: 'transform 0.2s'
    }}>
      
      <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '10px' }}>
        {projeto.titulo}
      </h3>
      
      <p style={{ color: '#CCFF00', fontSize: '0.9rem', marginBottom: '15px', fontWeight: 'bold' }}>
        {projeto.tecnologias}
      </p>

      {/* flexGrow: 1 faz o texto esticar para preencher o espaço vazio, empurrando o botão pro final */}
      <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: '1.5', flexGrow: 1, marginBottom: '20px', whiteSpace: 'pre-wrap' }}>
        {projeto.descricao}
      </p>

      <a
        href={projeto.linkRepo}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'block',
          padding: '12px',
          backgroundColor: 'transparent',
          color: '#00A3FF',
          textDecoration: 'none',
          borderRadius: '8px',
          border: '1px solid #00A3FF',
          fontWeight: 'bold',
          textAlign: 'center',
          transition: 'all 0.2s'
        }}
        // Efeito de hover simples no botão
        onMouseOver={(e) => { e.target.style.backgroundColor = '#00A3FF'; e.target.style.color = '#000'; }}
        onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#00A3FF'; }}
      >
        Ver no GitHub
      </a>
      
    </div>
  );
}