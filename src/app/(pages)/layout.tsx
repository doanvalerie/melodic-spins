import '@globals/styles/base.css';
import '@globals/styles/components.css';

import { ApolloContext } from '@contexts/ApolloContext';
import { AuthContextProvider } from '@contexts/AuthContext';
import fonts from '@globals/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fonts}`}>
      <body className={`flex min-h-screen flex-col items-center`}>
        <ApolloContext>
          <AuthContextProvider>{children}</AuthContextProvider>
        </ApolloContext>
      </body>
    </html>
  );
}
