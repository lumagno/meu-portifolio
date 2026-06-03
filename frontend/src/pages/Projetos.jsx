import { useState, useRef } from 'react';
import { ProjetoCard } from '../components/ProjetoCard';

export function Projetos() {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      titulo: "ScanPro",
      descricao: ("Aplicativo Android desenvolvido em Kotlin para controle de inventário. O projeto tem como objetivo facilitar o cadastro, a consulta e o gerenciamento de produtos em estoque, com suporte à leitura de códigos de barras via câmera do dispositivo."),
      tecnologias: "Kotlin, Room (KTX + KSP), CameraX, ML Kit Barcode Scanning",
      linkRepo: "https://github.com/lumagno/ScanPro",
      imagemUrl: ""
    },
    {
      id: 2,
      titulo: "Gerenciamento de Biblioteca",
      descricao: ("Sistema de Gerenciamento de Biblioteca (LibManager) Este é um sistema desktop completo para gestão de bibliotecas, desenvolvido em Java com interface gráfica Swing. O projeto aplica conceitos fundamentais de Programação Orientada a Objetos (POO), padrões de projeto como Singleton e a arquitetura DAO (Data Access Object) para persistência de dados em memória."),
      tecnologias: " Java 17, Swing, POO, Singleton, DAO",
      linkRepo: "https://github.com/lumagno/Gerenciamento-de-Biblioteca",
      imagemUrl: ""
    },
    {
      id: 3,
      titulo: "Cash Flow",
      descricao: ("Cash Flow Management 💰 Um sistema web simples para gestão de fluxo de caixa desenvolvido em PHP 8+ utilizando o padrão de arquitetura MVC (Model-View-Controller) integrado com uma camada de acesso a dados (DAL - Data Access Layer). Este projeto permite o registo de transações financeiras (entradas e saídas), o cálculo automático do saldo e o registo de novos utilizadores com segurança."),
      tecnologias: "PHP 8+, MVC, DAL",
      linkRepo: "https://github.com/lumagno/cash_flow",
      imagemUrl: ""
    },
    {/*
      id: 4,
      titulo: "Portfólio Full-Stack",
      descricao: ("Minha vitrine digital desenvolvida do zero, consumindo uma API própria. Interface focada em componentização, hooks e design system moderno escuro."),
      tecnologias: "React, Vite, CSS, JavaScript",
      linkRepo: "https://github.com/lumagno/portfolio",
      imagemUrl: ""
    */}
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
        <h2 style={{ fontSize: '2.5rem', margin: 0 }}>
          <span style={{ color: '#00A3FF' }}>Projetos</span>
        </h2>

        {/* Setas de Navegação */}
        <div className="botoes-carrossel" style={{ display: 'flex', gap: '15px' }}>
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
              width: 'min(85vw, 350px)', // A MÁGICA ESTÁ NESTA LINHA
              scrollSnapAlign: 'start',
              display: 'flex'
            }}
          >
            <ProjetoCard projeto={projeto} />
          </div>
        ))}
      </div>

    </div>
  );
}