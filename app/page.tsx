export default function Page() {
  return (
    <main
      style={{
        backgroundColor: '#0b0b0b',
        color: '#ff1a1a',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Cinzel, serif',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        🚀 Night Vision Club
      </h1>
      <p>Vitrine Next.js prête à l’emploi (Vercel)</p>
      <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.7 }}>
        Powered by Next.js 14 + Tailwind + Vercel
      </p>
    </main>
  );
}
