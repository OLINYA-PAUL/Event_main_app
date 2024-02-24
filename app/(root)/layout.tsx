import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section  className="flex h-screen flex-col">
          <Header />
          <main  className="flex-1"> {children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
