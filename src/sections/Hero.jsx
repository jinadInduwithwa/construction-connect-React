import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import backgroundImg1 from '../assets/hero-section/background1.webp'; // Replace with your first background image
import backgroundImg2 from '../assets/hero-section/background2.webp'; // Replace with your second background image
import backgroundImg3 from '../assets/hero-section/background3.webp'; // Replace with your third background image

const Hero = () => {
  // Array of background images and corresponding text content
  const slides = [
    {
      background: backgroundImg1,
      subheading: 'WE ARE BUILDERS',
      heading: 'we will build your dream',
      description:
        'Whether you’re dreaming of a new structure or enhancing an existing space, Sumon Structures is here to make it happen. With unmatched expertise and dedication, we ensure a smooth building experience from start to finish.',
    },
    {
      background: backgroundImg2,
      subheading: 'CRAFTING YOUR VISION',
      heading: 'we shape your future',
      description:
        'Transform your ideas into reality with Sumon Structures. Our team delivers innovative solutions tailored to your needs, ensuring quality and precision in every project.',
    },
    {
      background: backgroundImg3,
      subheading: 'DESIGN WITH PURPOSE',
      heading: 'we create lasting spaces',
      description:
        'From concept to completion, Sumon Structures designs spaces that inspire. Let us build environments that reflect your vision and stand the test of time.',
    },
  ];

  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect to cycle through slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div
      id="hero"
      className="relative bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] md:pt-[100px] lg:pt-[0px] lg:px-[150px] md:px-[40px] px-[20px] flex justify-center items-center flex-col lg:gap-5 gap-[50px] bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
    >
      {/* Black shadow overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <motion.div
        key={currentSlide} // Key to trigger animation on slide change
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="relative lg:w-[80%] md:w-[70%] w-full flex flex-col justify-center items-center lg:gap-8 gap-4 z-20 mx-auto"
      >
        <motion.h1 variants={slideUpVariants} className="text-[#FEBA17] text-lg md:text-2xl text-center">
          {slides[currentSlide].subheading}
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-[#FFFFFF] uppercase text-[30px] md:text-[40px] lg:text-[50px] font-bold text-center"
        >
          {slides[currentSlide].heading}
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-[#FEBA17] mx-auto"></div>
        <p className="text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] text-center">
          {slides[currentSlide].description}
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex justify-center items-center gap-5"
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-[#FEBA17] hover:bg-[#FFFFFF] hover:text-[#1a2a44] px-6 md:px-10 py-2 md:py-3 rounded-lg text-sm md:text-base text-[#1a2a44] font-bold"
          >
            READ MORE
          </motion.button>
          <motion.button
            variants={zoomInVariants}
            className="border-[#FFFFFF] hover:border-[#FEBA17] hover:text-[#FEBA17] border-2 px-6 md:px-10 py-2 md:py-3 rounded-lg text-sm md:text-base text-[#FFFFFF] font-bold"
          >
            REACH US
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;