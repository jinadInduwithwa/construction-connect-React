import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      id="about"
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
      >
        <motion.h1 variants={slideUpVariants} className="uppercase text-[#F4A261] text-xl lg:text-2xl">
          Welcome to
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-4xl lg:text-5xl font-bold text-white uppercase"
        >
          Aurora Builders
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-[#A0AEC0]"></div>
        <p className="text-2xl lg:text-3xl italic text-gray-50 mt-[60px]">
          Your Trusted Partner in Construction for Over 25 Years
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
      >
        <p className="text-white text-base lg:text-lg text-justify">
          With a wealth of experience in the construction industry, Aurora Builders leads the way in
          delivering quality, safety, and reliability. Our team of experts is dedicated to providing
          the highest standards in every project, big or small.
        </p>
        <p className="text-white text-base lg:text-lg text-justify">
          Explore our extensive portfolio and discover why we are the go-to builders for projects
          across the region.
        </p>
        {/* Additional details container */}
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
            className="text-white text-base lg:text-lg text-justify mt-4"
          >
            <p>
              At Aurora Builders, we specialize in a wide range of construction services, including
              residential, commercial, and industrial projects. Our commitment to excellence ensures
              that every project is completed on time and within budget, without compromising on
              quality.
            </p>
            <p className="mt-4">
              Our team consists of highly skilled architects, engineers, and builders who bring
              innovative solutions to every challenge. We pride ourselves on our transparent
              communication, sustainable practices, and unwavering dedication to client satisfaction.
            </p>
          </motion.div>
        )}
        <motion.button
          variants={zoomInVariants}
          className="bg-[#F4A261]  text-[#2B3A55] hover:text-[#2B3A55] py-2 px-4 rounded-md hover:bg-[#fa9a4c] transition duration-300 font-bold mt-4 self-start"
          onClick={handleLearnMore}
        >
          {showMore ? 'Show Less' : 'Learn More'}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;