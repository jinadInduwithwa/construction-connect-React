import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants } from './animation';

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className={`hidden sm:block w-full font-sans fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F9F7F3] shadow-sm' : 'bg-transparent'
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
    </motion.div>
  );
};

export default ContactInfo;