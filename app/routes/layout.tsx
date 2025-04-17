import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen bg-white text-black'>
      <Header />
      <main className='flex-1 pt-[56px]'>{children}</main>
      <Footer />
    </div>
  );
}
