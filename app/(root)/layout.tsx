import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main>
        <Header />
        <body>{children}</body>
      </main>
      <Footer />
    </html>
  );
}
