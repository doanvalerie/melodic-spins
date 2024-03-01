import '@globals/styles/base.css';
import '@globals/styles/components.css';

import NavBar from '@components/NavBar/NavBar';
import fonts from '@globals/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fonts}`}>
      <body className={`flex min-h-screen flex-col items-center`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
