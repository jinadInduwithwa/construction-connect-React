import React, { useState, useEffect } from 'react';
import { COLORS, CONTACT_INFO } from '../constant/constants'; // Adjust path as needed

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
      className={`hidden sm:block w-full font-Mainfront fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? `bg-[${COLORS.BACKGROUND_CONTACT}]` : 'bg-transparent'
      }`}
    >
      <div className="flex flex-row justify-start px-[56px] py-1 w-full max-w-[1920px] mx-auto">
        <div className="flex flex-wrap justify-start items-center gap-[12px]">
          <div className="flex items-center gap-2">
            <a
              href={CONTACT_INFO.EMAIL_HREF}
              className={`text-xs font-medium text-[${COLORS.TEXT_LIGHT}] font-PlusSans cursor-pointer hover:underline`}
            >
              {CONTACT_INFO.EMAIL}
            </a>
          </div>
          <div className={`text-[${COLORS.TEXT_LIGHT}]`}>|</div>
          <div className="flex items-center gap-2">
            <a
              href={CONTACT_INFO.PHONE_HREF}
              className={`text-xs font-medium text-[${COLORS.TEXT_LIGHT}] font-PlusSans cursor-pointer hover:underline`}
            >
              {CONTACT_INFO.PHONE}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;