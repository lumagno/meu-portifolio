import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SobreMim } from './components/SobreMim';
import { Ferramentas } from './pages/Ferramentas'; // <-- Importe aqui
import { Projetos } from './pages/Projetos';
import { Contato } from './pages/Contato';
import './App.css';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#fff', minHeight: '100vh', backgroundColor: '#121212' }}>
      
      <Menu />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Header />

        <main>
          <section id="sobre" style={{ scrollMarginTop: '100px', marginBottom: '80px' }}>
            <SobreMim />
          </section>

          <section id="projetos" style={{ scrollMarginTop: '100px', marginBottom: '80px' }}>
            <Projetos />
          </section>
          
          <section id="ferramentas" style={{ scrollMarginTop: '100px', marginBottom: '80px' }}>
            <Ferramentas />
          </section>

          <section id="contato" style={{ scrollMarginTop: '100px', paddingBottom: '100px' }}>
            <Contato />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;