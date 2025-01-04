import "./globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="mx-auto max-w-screen-2xl p-6">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
