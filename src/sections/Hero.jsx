import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import constructionVideo from '../assets/hero-section/construction-video.mp4'; // Import video
import fallbackImage from '../assets/hero-section/fallback-image.jpg'; // Import fallback image

const Hero = () => {
  // Array of slide text content
  const slides = [
    {
      subheading: 'BUILDING EXCELLENCE',
      heading: 'We Construct Your Dreams',
      description:
        'At Aurora Builders, we turn your vision into reality with 25 years of expertise. From residential to commercial projects, we deliver unmatched quality and precision.',
    },
    {
      subheading: 'INNOVATIVE SOLUTIONS',
      heading: 'Shaping Your Future',
      description:
        'Aurora Builders crafts innovative, sustainable structures tailored to your needs. Let us build spaces that inspire and endure for generations.',
    },
    {
      subheading: 'DESIGN WITH IMPACT',
      heading: 'Creating Timeless Spaces',
      description:
        'From concept to completion, Aurora Builders designs environments that reflect your vision. Trust us to build spaces that stand the test of time.',
    },
  ];

  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect to cycle through slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // 8 seconds per slide

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div
      id="hero"
      className="relative w-full lg:h-[700px] h-fit m-auto pt-[60px] md:pt-[100px] lg:pt-0 lg:px-16 md:px-10 px-5 flex justify-center items-center flex-col lg:gap-5 gap-10 bg-cover bg-center"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={constructionVideo} type="video/mp4" />
        <img src={fallbackImage} alt="Fallback construction image" className="w-full h-full object-cover" />
      </video>
      {/* Black shadow overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <motion.div
        key={currentSlide} // Key to trigger animation on slide change
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="relative lg:w-[80%] w-[90%] flex flex-col justify-center items-center lg:gap-8 gap-4 z-20 mx-auto"
        role="banner"
        aria-label="Hero Section"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-[#F4A261] text-lg md:text-xl lg:text-2xl text-center uppercase"
        >
          {slides[currentSlide].subheading}
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-[#FFFFFF] uppercase text-3xl md:text-4xl lg:text-5xl font-bold text-center"
        >
          {slides[currentSlide].heading}
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-[#F4A261] mx-auto"></div>
        <p className="text-[#FFFFFF] text-sm md:text-base lg:text-lg text-center">
          {slides[currentSlide].description}
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex justify-center items-center gap-4"
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-[#F4A261] hover:bg-[#E89B4E] text-[#2B3A55] px-6 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-base font-bold transition-colors duration-300"
            aria-label="Read more about Aurora Builders"
          >
            Read More
          </motion.button>
          <motion.button
            variants={zoomInVariants}
            className="border-2 border-[#FFFFFF] hover:border-[#F4A261] hover:text-[#F4A261] text-[#FFFFFF] px-6 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-base font-bold transition-colors duration-300"
            aria-label="Contact Aurora Builders"
          >
            Reach Us
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;