export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer style={{
      textAlign: 'center',
      padding: '40px 20px',
      borderTop: '1px solid #333',
      backgroundColor: '#0a0a0a',
      color: '#888',
      marginTop: '60px',
      fontSize: '0.9rem'
    }}>
      <p>&copy; {anoAtual} Luiz Henrique Magnagna. Todos os direitos reservados.</p>
    </footer>
  );
}