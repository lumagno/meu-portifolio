import { useState, useRef } from 'react';
import { ProjetoCard } from '../components/ProjetoCard';

export function Projetos() {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      titulo: "API Gestão de Funcionários",
      descricao: "Sistema backend de gerenciamento e controle, focado na arquitetura de endpoints isolados e integração direta com banco de dados relacional.",
      tecnologias: "C#, .NET, Entity Framework Core, SQLite",
      linkRepo: "https://github.com/seu-usuario/gestao-funcionarios",
      imagemUrl: ""
    },
    {
      id: 2,
      titulo: "Agenda de Contatos",
      descricao: "Aplicação estruturada para gerenciamento de dados na memória, focada em conceitos sólidos de Programação Orientada a Objetos e estruturas como ArrayLists.",
      tecnologias: "Java",
      linkRepo: "https://github.com/seu-usuario/agenda-java",
      imagemUrl: ""
    },
    {
      id: 3,
      titulo: "Source Engine Troubleshooter",
      descricao: "Documentação e scripts criados para diagnóstico e resolução de erros de dependência (como o clássico Error 126) em motores de jogos.",
      tecnologias: "Source Engine, Debugging, Scripts",
      linkRepo: "https://github.com/seu-usuario/source-fixes",
      imagemUrl: ""
    },
    {
      id: 4,
      titulo: "Portfólio Full-Stack",
      descricao: "Minha vitrine digital desenvolvida do zero, consumindo uma API própria. Interface focada em componentização, hooks e design system moderno escuro.",
      tecnologias: "React, Vite, CSS, JavaScript",
      linkRepo: "https://github.com/seu-usuario/portfolio",
      imagemUrl: ""
    }
  ]);

  // 1. Criamos a "referência" que vai apontar para a caixa dos projetos
  const carrosselRef = useRef(null);

  // 2. Função que os botões vão chamar para empurrar o carrossel
  const rolar = (direcao) => {
    if (carrosselRef.current) {
      // Move 380 pixels por clique (350px do card + 30px de espaço entre eles)
      const distancia = 380; 
      carrosselRef.current.scrollBy({
        left: direcao === 'esquerda' ? -distancia : distancia,
        behavior: 'smooth' // Faz o deslize ser suave
      });
    }
  };

  return (
    <div style={{ paddingTop: '20px', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
      
      {/* Cabeçalho com o Título e os Botões alinhados */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#00A3FF', margin: 0 }}>
          Meus <span style={{ color: '#CCFF00' }}>Projetos</span>
        </h2>

        {/* Setas de Navegação */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            onClick={() => rolar('esquerda')}
            style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#CCFF00', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'background 0.2s' }}
          >
            &#8592; {/* Código HTML para a seta esquerda */}
          </button>
          
          <button 
            onClick={() => rolar('direita')}
            style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#CCFF00', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'background 0.2s' }}
          >
            &#8594; {/* Código HTML para a seta direita */}
          </button>
        </div>
      </div>

      {/* 3. Injetamos o CSS para esconder a barra de rolagem no Chrome, Safari, Firefox e Edge */}
      <style>
        {`
          .esconder-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* Container do Carrossel */}
      <div 
        ref={carrosselRef} /* Ligamos a nossa referência a esta div */
        className="esconder-scrollbar"
        style={{ 
          display: 'flex', 
          gap: '30px', 
          overflowX: 'auto', 
          paddingBottom: '20px', 
          scrollSnapType: 'x mandatory', 
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none' /* IE e Edge */
        }}
      >
        {projetos.map(projeto => (
          <div 
            key={projeto.id} 
            style={{ 
              flex: '0 0 auto', 
              width: '350px', 
              scrollSnapAlign: 'start' 
            }}
          >
            <ProjetoCard projeto={projeto} />
          </div>
        ))}
      </div>

    </div>
  );
}