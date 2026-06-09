import { useState } from 'react';

export function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  // Novos estados para controlar o visual do botão durante o envio
  const [enviando, setEnviando] = useState(false);
  const [enviadoComSucesso, setEnviadoComSucesso] = useState(false);

  // COLOQUE O SEU LINK DO FORMSPREE AQUI EM BAIXO
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const resposta = await fetch(`${apiUrl}/api/contato/cadastrar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          mensagem: mensagem
        })
      });

      if (resposta.ok) {
        setEnviadoComSucesso(true);
        setNome(''); setEmail(''); setMensagem('');
        
        // Esconde a mensagem de sucesso após 5 segundos
        setTimeout(() => setEnviadoComSucesso(false), 5000);
      } else {
        alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
      }
    } catch (erro) {
      console.error("Erro de rede:", erro);
      alert("Erro na ligação. Verifique a sua internet.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div style={{ paddingTop: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '40px', fontSize: '2.5rem', color: '#00A3FF' }}>
        Vamos <span style={{ color: '#CCFF00' }}>Conversar?</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'start' }}>

        {/* LADO ESQUERDO: Links Diretos */}
        <div>
          <p style={{ color: '#ddd', marginBottom: '30px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Tem alguma oportunidade de estágio, projeto ou quer apenas trocar umas ideias sobre tecnologia? Me encontre numa das redes abaixo ou preencha o formulário ao lado.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
              <h3 style={{ color: '#CCFF00', marginBottom: '5px', fontSize: '1.1rem' }}>E-mail</h3>
              <a href="mailto:luizmagnagnagno@hotmail.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>luizmagnagnagno@hotmail.com</a>
            </div>

            <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
              <h3 style={{ color: '#CCFF00', marginBottom: '5px', fontSize: '1.1rem' }}>LinkedIn</h3>
              <a href="https://linkedin.com/in/luizhmagnagnagno" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>linkedin.com/in/luizhmagnagnagno</a>
            </div>

            <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
              <h3 style={{ color: '#CCFF00', marginBottom: '5px', fontSize: '1.1rem' }}>GitHub</h3>
              <a href="https://github.com/lumagno/meu-portifolio" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>github.com/lumagno/meu-portifolio</a>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: O formulário com Formspree */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #333' }}>
          
          {enviadoComSucesso ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <h3 style={{ color: '#CCFF00', fontSize: '1.5rem', marginBottom: '10px' }}>Mensagem Enviada! 🎉</h3>
              <p style={{ color: '#ddd' }}>Obrigado pelo contacto. Responderei o mais breve possível.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <input 
                type="text" 
                placeholder="O seu Nome" 
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={{ padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#121212', color: '#fff', fontSize: '1rem', outline: 'none' }}
                required
              />
              
              <input 
                type="email" 
                placeholder="O seu E-mail" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#121212', color: '#fff', fontSize: '1rem', outline: 'none' }}
                required
              />
              
              <textarea 
                placeholder="A sua Mensagem" 
                name="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                rows="5"
                style={{ padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#121212', color: '#fff', fontSize: '1rem', resize: 'vertical', outline: 'none' }}
                required
              />
              
              <button 
                type="submit"
                disabled={enviando}
                style={{ 
                  padding: '15px', 
                  borderRadius: '8px', 
                  border: 'none', 
                  backgroundColor: enviando ? '#555' : '#CCFF00', 
                  color: enviando ? '#aaa' : '#000', 
                  fontWeight: 'bold', 
                  fontSize: '1.1rem', 
                  cursor: enviando ? 'not-allowed' : 'pointer', 
                  marginTop: '10px', 
                  transition: 'background-color 0.3s' 
                }}
              >
                {enviando ? 'A enviar...' : 'Enviar Mensagem'}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}