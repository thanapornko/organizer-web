import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from '@remix-run/react';
import { Menu } from 'lucide-react';

const pages = [
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About Us', path: '/about-us' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // shadow เมื่อ scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ปิดเมนูเมื่อเปลี่ยนหน้า
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // JSON-LD: SiteNavigationElement (ช่วยบอทเข้าใจเมนู)
  const navLd = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: pages.map((p) => p.name),
    url: pages.map((p) => p.path),
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all bg-white ${
        scrolled ? 'shadow-xl' : 'shadow-md'
      }`}
      role='banner'
    >
      {/* JSON-LD เมนู */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navLd) }}
      />

      <div className='mx-auto px-6 py-2 flex items-center justify-between'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2 text-black font-bold tracking-widest'
          rel='home'
          aria-label='หน้าแรก Infinity9 Organizer'
        >
          <img
            className='w-[80px] h-[40px]'
            src='/images/logo.png'
            alt='Infinity9 Organizer โลโก้'
            width={80}
            height={40}
            loading='eager'
            decoding='async'
          />
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex font-medium gap-1' aria-label='เมนูหลัก'>
          {pages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              prefetch='intent'
              className={({ isActive }) =>
                `group relative px-3 py-1 transition-all duration-300 ${
                  isActive
                    ? 'text-[#5790c3]'
                    : 'text-black hover:text-[#5790c3]'
                }`
              }
            >
              <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#eb993b] after:transition-all after:duration-700 group-hover:after:w-full">
                {page.name}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className='md:hidden text-black'
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label='เปิด/ปิดเมนู'
          aria-expanded={menuOpen}
          aria-controls='mobile-menu'
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id='mobile-menu'
        className={`md:hidden bg-white text-black px-6 space-y-3 shadow-xl transition-[max-height,opacity] duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label='เมนูหลัก (มือถือ)'>
          {pages.map((page, index) => (
            <NavLink
              key={page.path}
              to={page.path}
              className={`block pb-2 hover:text-[#5790c3] pt-4
                ${index === pages.length - 1 ? 'pb-4' : ''} ${
                index !== pages.length - 1 ? 'border-b border-gray-700' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {page.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
