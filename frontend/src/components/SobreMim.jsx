export function SobreMim() {
  return (
    <section style={{ 
      marginBottom: '60px', 
      backgroundColor: '#1a1a1a', 
      padding: '40px', 
      borderRadius: '12px', 
      borderLeft: '4px solid #CCFF00' 
    }}>
      <h2 style={{ color: '#00A3FF', marginTop: 0, marginBottom: '20px', fontSize: '2rem' }}>
        Sobre Mim
      </h2>
      
      <p style={{ lineHeight: '1.8', color: '#ddd', fontSize: '1.1rem' }}>
        Olá, eu sou o Luiz Henrique Magnagnagno. Atualmente sou estudante na Universidade Positivo e atuo como estagiário na área de tecnologia, com o objetivo de sempre conectar o embasamento acadêmico à prática de mercado.
      </p>
      
      <p style={{ lineHeight: '1.8', color: '#ddd', fontSize: '1.1rem', marginTop: '15px' }}>
        Meu foco principal está no desenvolvimento de sistemas robustos e arquiteturas limpas. Tenho forte atuação na construção de APIs utilizando o ecossistema C#, .NET e Entity Framework Core, além de aplicar sólidos conceitos de orientação a objetos com Java.
      </p>

      <div style={{ marginTop: '25px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <span style={{ backgroundColor: '#2a2a2a', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: '#CCFF00' }}>C#</span>
        <span style={{ backgroundColor: '#2a2a2a', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: '#CCFF00' }}>.NET</span>
        <span style={{ backgroundColor: '#2a2a2a', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: '#CCFF00' }}>Entity Framework</span>
        <span style={{ backgroundColor: '#2a2a2a', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: '#CCFF00' }}>JavaScript</span>
        <span style={{ backgroundColor: '#2a2a2a', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: '#CCFF00' }}>React</span>
      </div>
    </section>
  );
}