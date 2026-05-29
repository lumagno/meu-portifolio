import { useState } from 'react';

export function Contato() {
  // O seu código de estado (caixinhas de memória)
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  // A sua função de envio
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pronto para enviar para a API:", { nome, email, mensagem });
    alert(`Obrigado, ${nome}! Seu formulário está visualmente pronto.`);
    // Limpa os campos após o envio
    setNome(''); setEmail(''); setMensagem('');
  };

  return (
    <div style={{ paddingTop: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '40px', fontSize: '2.5rem', color: '#00A3FF' }}>
        Vamos <span style={{ color: '#CCFF00' }}>Conversar?</span>
      </h2>

      {/* Container Grid para dividir a tela em 2 colunas */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '60px',
        alignItems: 'start'
      }}>

        {/* LADO ESQUERDO: Textos e Links Diretos */}
        <div>
          <p style={{ color: '#ddd', marginBottom: '30px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Tem alguma oportunidade ou quer bater um papo sobre tecnologia? Me encontre em uma das redes abaixo ou preencha o formulário ao lado.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
              <h3 style={{ color: '#CCFF00', marginBottom: '5px', fontSize: '1.1rem' }}>E-mail</h3>
              <a href="mailto:luizmagnagnagno@hotmail.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>luizmagnagnagno@hotmail.com</a>
            </div>

            <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
              <h3 style={{ color: '#CCFF00', marginBottom: '5px', fontSize: '1.1rem' }}>LinkedIn</h3>
              <a href="https:////www.linkedin.com/in/luizhmagnagnagno" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>linkedin.com/in/luizhmagnagnagno</a>
            </div>

            <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
              <h3 style={{ color: '#CCFF00', marginBottom: '5px', fontSize: '1.1rem' }}>GitHub</h3>
              <a href="https://github.com/lumagno" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>github.com/lumagno</a>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: O seu formulário */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #333' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <input 
              type="text" 
              placeholder="Seu Nome" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={{ padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#121212', color: '#fff', fontSize: '1rem', outline: 'none' }}
              required
            />
            
            <input 
              type="email" 
              placeholder="Seu E-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#121212', color: '#fff', fontSize: '1rem', outline: 'none' }}
              required
            />
            
            <textarea 
              placeholder="Sua Mensagem" 
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              rows="5"
              style={{ padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#121212', color: '#fff', fontSize: '1rem', resize: 'vertical', outline: 'none' }}
              required
            />
            
            <button 
              type="submit"
              style={{ padding: '15px', borderRadius: '8px', border: 'none', backgroundColor: '#CCFF00', color: '#000', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', marginTop: '10px', transition: 'opacity 0.2s' }}
            >
              Enviar Mensagem
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}