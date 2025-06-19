const QuienesSomos = () => {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>¿Quiénes somos?</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Somos una empresa líder en la venta de celulares en todo el país. 
          Trabajamos con las mejores marcas del mercado y ofrecemos atención personalizada 
          en todas nuestras sucursales. Nuestro objetivo es brindarte la mejor experiencia 
          de compra y tecnología de última generación.
        </p>
  
        <h2 style={{ marginTop: '40px' }}>Nuestras oficinas</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginTop: '20px'
          }}
        >
          <img
            src="https://ctfassets.imgix.net/vh7r69kgcki3/6z6jTNeGuNdDWckhF4YG9V/63077b515881a61f4a2e38194a36e9bc/Web_72DPI-20210617_Lightwell_04B136_06.jpg?auto=format%20compress&fit=crop&q=50&w=1000&h=1000"
            alt="Oficina 1"
            style={{ borderRadius: '8px', width: '400px', height: '300px', objectFit: 'cover' }}
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c6b1a16da50d3614fd7c8e3/72a7c5b9-f6ff-4aba-a01a-edfda24dcdd5/unnamed+%2818%29.jpg"
            alt="Oficina 2"
            style={{ borderRadius: '8px', width: '400px', height: '300px', objectFit: 'cover' }}
          />
          <img
            src="https://www.rayzeek.com/wp-content/uploads/2024/05/open-office-energy-code-1.jpg.webp"
            alt="Oficina 3"
            style={{ borderRadius: '8px', width: '400px', height: '300px', objectFit: 'cover' }}
          />
        </div>
      </div>
    );
  };
  
  export default QuienesSomos;
  