import './globals.css';

export const metadata = {
  title: 'Night Vision Club',
  description: 'Two-model vending machines for nightlife venues.',
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0b0b0b', color: '#ff1a1a' }}>
        {children}
      </body>
    </html>
  );
}
