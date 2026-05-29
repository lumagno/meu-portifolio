export function Menu() {
  return (
    <nav style={{
      position: 'sticky', top: 0, backgroundColor: 'rgba(18, 18, 18, 0.95)', 
      backdropFilter: 'blur(10px)', padding: '20px 40px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', zIndex: 1000
    }}>
      <div style={{ color: '#CCFF00', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'monospace' }}>
        &lt;Portfólio /&gt;
      </div>
      
      <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, padding: 0 }}>
        <li>
          <a href="#sobre" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Sobre</a>
        </li>
        <li>
          <a href="#projetos" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Projetos</a>
        </li>
        <li>
          <a href="#ferramentas" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Ferramentas</a>
        </li>
        <li>
          <a href="#contato" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>Contato</a>
        </li>
        <li>
          <a 
            href="/curriculo.pdf" 
            target="_blank" 
            rel="noreferrer" 
            style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}