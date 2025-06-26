import React, { useState, useEffect } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const NAV_ITEMS = [
  { link: 'Home', path: 'home' },
  { link: 'About', path: 'about' },
  { link: 'Services', path: 'services' },
  { link: 'Project', path: 'projects' },
  { link: 'Contact', path: 'contact' },
];

const CONTACT_INFO = {
  EMAIL: 'info@eventpro.com',
  PHONE: '+94 23 123 4567',
  EMAIL_HREF: 'mailto:info@eventpro.com',
  PHONE_HREF: 'tel:+94231234000',
};

const ContactInfo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`hidden sm:block w-full font-Mainfront fixed top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#443627]' : 'bg-transparent'}`}
    >
      <div className="flex flex-row justify-start px-[56px] py-1 w-full max-w-[1920px] mx-auto">
        <div className="flex flex-wrap justify-start items-center gap-[12px]">
          <div className="flex items-center gap-2">
            <a
              href={CONTACT_INFO.EMAIL_HREF}
              className="text-xs font-medium text-[#FFFFFF] font-PlusSans cursor-pointer hover:underline"
            >
              {CONTACT_INFO.EMAIL}
            </a>
          </div>
          <div className="text-[#FFFFFF]">|</div>
          <div className="flex items-center gap-2">
            <a
              href={CONTACT_INFO.PHONE_HREF}
              className="text-xs font-medium text-[#FFFFFF] font-PlusSans cursor-pointer hover:underline"
            >
              {CONTACT_INFO.PHONE}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    setShowPopup(true);
  };

  const proceedCall = () => {
    window.location.href = CONTACT_INFO.PHONE_HREF;
    setShowPopup(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <ContactInfo />
      <nav
        className={`w-full flex justify-between items-center px-4 sm:px-6 lg:px-16 py-3 fixed top-0 sm:top-[28px] z-40 transition-colors duration-300 ${isScrolled ? 'bg-[#FFFFFF] shadow纠正-lg' : 'bg-transparent shadow-none'}`}
      >
        <h1
          className={`text-xl sm:text-2xl lg:text-4xl font-bold font-sans ${isScrolled ? 'text-[#1a2a44] sm:text-[#FFFFFF]' : 'text-[#FFFFFF]'}`}
        >
          <span className="text-[#FEBA17]">LOGO</span>
        </h1>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`uppercase font-semibold cursor-pointer px-4 py-1 hover:underline hover:decoration-[#FEBA17] hover:decoration-4 hover:underline-offset-5 tracking-wide text-sm transition-colors duration-300 ${isScrolled ? 'text-[#1a2a44]' : 'text-[#FFFFFF]'}`}
                spy={true}
                offset={-148}
                smooth={true}
                onClick={closeMenu}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="hidden md:flex px-4 py-2 rounded-lg font-semibold transition-all duration-300 bg-[#FEBA17] text-[#1a2a44] hover:bg-[#e6b33b] hover:text-[#1a2a44]"
          onClick={handleCall}
        >
          Call Now
        </button>
        {/* Mobile Menu Toggle Icon */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          {isMenuOpen ? (
            <FaXmark className="text-[#FEBA17] text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-[#FEBA17] text-2xl cursor-pointer" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-[52px] sm:top-[80px] left-0 w-full bg-[#FFFFFF] shadow-lg p-4 lg:hidden`}
          onClick={closeMenu}
        >
          <ul className="flex flex-col items-center gap-2 w-full">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="w-full">
                <Link
                  to={item.path}
                  className="block text-[#1a2a44] uppercase font-semibold cursor-pointer p-2 hover:bg-[#FEBA17] hover:text-[#FFFFFF] text-center text-sm transition-colors duration-300"
                  spy={true}
                  offset={-148}
                  smooth={true}
                >
                  {item.link}
                </Link>
              </li>
            ))}
            <li className="w-full mt-2">
              <button
                className="bg-[#443627] text-[#FFFFFF] w-full py-3 rounded-lg font-semibold hover:bg-[#FEBA17] hover:text-[#1a2a44] transition-colors duration-300"
                onClick={handleCall}
              >
                Call Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#FFFFFF] rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#1a2a44]">Initiate Call</h2>
              <button onClick={closePopup} className="text-[#1a2a44] hover:text-[#FEBA17]">
                <FaXmark className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-[#4B5563] mb-6">
              You are about to call <span className="font-medium">{CONTACT_INFO.PHONE}</span>. Would you like to proceed?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-[#D1D5DB] text-[#1a2a44] rounded-lg hover:bg-[#4B5563] transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={proceedCall}
                className="px-4 py-2 bg-[#FEBA17] text-[#1a2a44] rounded-lg hover:bg-[#e6b33b] transition-colors duration-300"
              >
                Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;