import React, { useState, useEffect } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const NAV_ITEMS = [
  { link: 'Home', path: 'home' },
  { link: 'About', path: 'about' },
  { link: 'Services', path: 'services' },
  { link: 'Projects', path: 'projects' },
  { link: 'Contact', path: 'contact' },
];

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
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className={`hidden sm:block w-full font-sans fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FFFFFF]' : 'bg-[#FFFFFF]'
      }`}
      role="complementary"
      aria-label="Contact Information"
    >
      <div className="lg:w-[80%] w-[90%] mx-auto px-6 py-2">
        <div className="flex flex-row justify-start items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="mailto:info@aurorabuilders.com"
              className="text-sm lg:text-base text-[#2B3A55] font-medium hover:text-[#F4A261] transition-colors"
              aria-label="Email us at info@aurorabuilders.com"
            >
              info@aurorabuilders.com
            </a>
          </div>
          <div className="text-[#A0AEC0] text-sm lg:text-base">|</div>
          <div className="flex items-center gap-2">
            <a
              href="tel:+12065550123"
              className="text-sm lg:text-base text-[#2B3A55] font-medium hover:text-[#F4A261] transition-colors"
              aria-label="Call us at +1 (206) 555-0123"
            >
              +1 (206) 555-0123
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

  return (
    <div>
      <ContactInfo />
      <nav
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className={`w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2 fixed top-0 sm:top-[28px] z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[#FFFFFF] shadow-lg' : 'bg-transparent shadow-none'
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <h1
          variants={zoomInVariants}
          className={`text-xl sm:text-2xl lg:text-4xl font-bold font-sans ${
            isScrolled ? 'text-[#2B3A55]' : 'text-[#FFFFFF]'
          }`}
        >
          <span className="text-[#F4A261]">Aurora</span> Builders
        </h1>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item, index) => (
            <li key={index} variants={zoomInVariants}>
              <Link
                to={item.path}
                className={`uppercase font-semibold cursor-pointer px-4 py-1 hover:text-[#F4A261] hover:underline hover:decoration-[#F4A261] hover:decoration-2 hover:underline-offset-4 text-sm lg:text-base transition-colors duration-300 ${
                  isScrolled ? 'text-[#2B3A55]' : 'text-[#FFFFFF]'
                }`}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={closeMenu}
                aria-label={`Go to ${item.link} section`}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Toggle Icon */}
        <div
          variants={zoomInVariants}
          className="lg:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <FaXmark className="text-[#F4A261] text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-[#F4A261] text-2xl cursor-pointer" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          initial="hidden"
          animate={isMenuOpen ? 'visible' : 'hidden'}
          variants={slideUpVariants}
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } absolute top-[52px] sm:top-[80px] left-0 w-full bg-[#FFFFFF] shadow-lg p-4 lg:hidden`}
        >
          <ul className="flex flex-col items-center gap-2 w-full">
            {NAV_ITEMS.map((item, index) => (
              <li
                key={index}
                variants={zoomInVariants}
                className="w-full"
              >
                <Link
                  to={item.path}
                  className="block text-[#2B3A55] uppercase font-semibold cursor-pointer p-2 hover:bg-[#F4A261] hover:text-[#FFFFFF] text-center text-sm lg:text-base transition-colors duration-300"
                  spy={true}
                  offset={-80}
                  smooth={true}
                  onClick={closeMenu}
                  aria-label={`Go to ${item.link} section`}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;