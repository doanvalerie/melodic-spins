import '@globals/styles/base.css';
import fonts from '@globals/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fonts}`}>
      <body
        className={`flex flex-col min-h-screen justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
