import { useState, useEffect } from 'react';
import { Link } from '@remix-run/react';
import { Menu } from 'lucide-react';
import { FaLightbulb } from 'react-icons/fa';

const pages = [
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About Us', path: '/about-us' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [blinked, setBlinked] = useState(false);

  useEffect(() => {
    setBlinked(true);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all bg-black ${
        scrolled && 'shadow-xl'
      }`}
    >
      <div className='mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2 text-white font-bold tracking-widest'
        >
          <FaLightbulb
            className={`text-xl transition-colors duration-300 ${
              scrolled ? 'text-yellow-300' : 'text-white'
            } ${blinked ? 'blink-yellow' : ''}`}
          />

          <span className='text-xl'>Infinity9</span>
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex font-medium'>
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className='relative px-3 py-1 rounded-md text-white transition-all duration-500 ease-in-out hover:bg-gray-800'
            >
              <span className='transition-all duration-500 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-purple-500 hover:to-purple-600 hover:bg-[length:200%_100%] hover:animate-slide-gradient'>
                {page.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className='md:hidden text-white'
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label='Toggle menu'
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-black text-white px-6 pb-4 space-y-3'>
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className='block border-b border-gray-700 pb-2'
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
