export function Menu() {
  return (
    <nav style={{
      position: 'sticky', top: 0, backgroundColor: 'rgba(18, 18, 18, 0.95)', 
      backdropFilter: 'blur(10px)', 
      padding: '15px 20px', // Diminuímos o padding para telas menores
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'center', 
      borderBottom: '1px solid #333', 
      zIndex: 1000,
      flexWrap: 'wrap', // Permite que os itens quebrem linha no celular
      gap: '15px'
    }}>
      <div style={{ color: '#CCFF00', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'monospace' }}>
        &lt;L.H.M/&gt;
      </div>
      
      <ul style={{ 
        listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0, 
        flexWrap: 'wrap', // Permite que os próprios links se ajustem
        justifyContent: 'center' 
      }}>
        <li><a href="#sobre" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Sobre</a></li>
        <li><a href="#ferramentas" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Ferramentas</a></li>
        <li><a href="#projetos" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Projetos</a></li>
        <li><a href="#contato" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>Contato</a></li>
        <li><a href="/CV-LUIZ MAGNAGNAGNO.pdf" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>CV</a></li>
      </ul>
    </nav>
  );
}