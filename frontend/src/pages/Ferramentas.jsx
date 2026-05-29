export function Ferramentas() {
  return (
    <div style={{ paddingTop: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#00A3FF', marginBottom: '20px', marginTop: 0 }}>
        Minhas <span style={{ color: '#CCFF00' }}>Ferramentas</span>
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
      }}>
        
        {/* Card Backend .NET */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #333' }}>
          <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.3rem' }}>Back e Front</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <span style={{ backgroundColor: '#2a2a2a', padding: '8px 12px', borderRadius: '6px', color: '#00A3FF', fontSize: '0.9rem', border: '1px solid #444' }}></span>
            <span style={{ backgroundColor: '#2a2a2a', padding: '8px 12px', borderRadius: '6px', color: '#00A3FF', fontSize: '0.9rem', border: '1px solid #444' }}></span>
            <span style={{ backgroundColor: '#2a2a2a', padding: '8px 12px', borderRadius: '6px', color: '#00A3FF', fontSize: '0.9rem', border: '1px solid #444' }}></span>
            <span style={{ backgroundColor: '#2a2a2a', padding: '8px 12px', borderRadius: '6px', color: '#00A3FF', fontSize: '0.9rem', border: '1px solid #444' }}></span>
            <span style={{ backgroundColor: '#2a2a2a', padding: '8px 12px', borderRadius: '6px', color: '#00A3FF', fontSize: '0.9rem', border: '1px solid #444' }}></span>
          </div>
        </div>

        {/* Card Orientação a Objetos */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #333' }}>
          <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.3rem' }}>Banco de dados</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <span style={{ backgroundColor: '#2a2a2a', padding: '8px 12px', borderRadius: '6px', color: '#CCFF00', fontSize: '0.9rem', border: '1px solid #444' }}></span>
            <span style={{ backgroundColor: '#2a2a2a', padding: '8px 12px', borderRadius: '6px', color: '#CCFF00', fontSize: '0.9rem', border: '1px solid #444' }}></span>
            <span style={{ backgroundColor: '#2a2a2a', padding: '8px 12px', borderRadius: '6px', color: '#CCFF00', fontSize: '0.9rem', border: '1px solid #444' }}></span>
          </div>
        </div>

        {/* Card Frontend */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #333' }}>
          <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.3rem' }}></h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <span style={{ backgroundColor: '#2a2a2a', padding: '8px 12px', borderRadius: '6px', color: '#fff', fontSize: '0.9rem', border: '1px solid #444' }}></span>
            <span style={{ backgroundColor: '#2a2a2a', padding: '8px 12px', borderRadius: '6px', color: '#fff', fontSize: '0.9rem', border: '1px solid #444' }}></span>
            <span style={{ backgroundColor: '#2a2a2a', padding: '8px 12px', borderRadius: '6px', color: '#fff', fontSize: '0.9rem', border: '1px solid #444' }}></span>
          </div>
        </div>

      </div>
    </div>
  );
}