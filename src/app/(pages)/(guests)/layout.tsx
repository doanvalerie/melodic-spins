import Footer from '@components/Footer/Footer';
import NavBar from '@components/NavBar/NavBar';

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
