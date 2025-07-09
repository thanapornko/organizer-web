import { useState, useEffect } from 'react';
import { Link } from '@remix-run/react';
import { Menu } from 'lucide-react';
import { useLocation } from '@remix-run/react';

const pages = [
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About Us', path: '/about-us' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [blinked, setBlinked] = useState(false);

  useEffect(() => {
    setBlinked(true);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all bg-white shadow-md ${
        scrolled && 'shadow-xl'
      }`}
    >
      <div className='mx-auto px-6 py-2 flex items-center justify-between'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2 text-black font-bold tracking-widest'
        >
          <img className='w-[80px] h-[40px]' src='/images/logo.png' alt='' />
        </Link>

        {/* Desktop Menu */}
        {/* <nav className='hidden md:flex font-medium gap-1'>
          {pages.map((page) => {
            const isActive = currentPath === page.path;
            return (
              <Link
                key={page.name}
                to={page.path}
                className={`group relative px-3 py-1 rounded-md transition-all duration-500 ease-in-out ${
                  isActive ? 'bg-slate-900' : 'text-black hover:bg-slate-900'
                }`}
              >
                <span
                  className={`transition-all duration-500 ease-in-out ${
                    isActive
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-[length:200%_100%] animate-slide-gradient'
                      : 'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-purple-500 group-hover:to-purple-600 group-hover:bg-[length:200%_100%] group-hover:animate-slide-gradient'
                  }`}
                >
                  {page.name}
                </span>
              </Link>
            );
          })}
        </nav> */}
        <nav className='hidden md:flex font-medium gap-1'>
          {pages.map((page) => {
            const isActive = currentPath === page.path;
            return (
              <Link
                key={page.name}
                to={page.path}
                className={`group relative px-3 py-1 transition-all duration-300 ${
                  isActive
                    ? 'text-[#5790c3]'
                    : 'text-black hover:text-[#5790c3]'
                }`}
              >
                <span
                  className={`relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#eb993b] after:transition-all after:duration-800 group-hover:after:w-full`}
                >
                  {page.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className='md:hidden text-black'
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label='Toggle menu'
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-white text-black px-6 space-y-3 shadow-xl'>
          {pages.map((page, index) => (
            <Link
              key={page.name}
              to={page.path}
              className={`block pb-2 hover:text-violet-900 ${
                index === 0 ? 'pt-4' : ''
              } ${index === pages.length - 1 ? 'pb-4' : ''} ${
                index !== pages.length - 1 ? 'border-b border-gray-700' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
