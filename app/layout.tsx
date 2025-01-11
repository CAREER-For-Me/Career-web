import Footer from "./components/layouts/Footer";
import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="mx-auto max-w-screen-xl p-6 overflow-x-hidden">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
