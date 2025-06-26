import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../export';

const Working = () => {
  return (
    <div id="working" className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-16 flex flex-col justify-between items-center gap-6"
      >
        <motion.h3
          variants={slideUpVariants}
          className="text-[#F4A261] text-xl lg:text-2xl uppercase"
        >
          Step by Step
        </motion.h3>
        <motion.h2
          variants={slideUpVariants}
          className="uppercase text-[#2B3A55] text-4xl lg:text-5xl font-bold text-center"
        >
          How It Works
        </motion.h2>
        <motion.div
          variants={zoomInVariants}
          className="w-[120px] h-[6px] bg-[#F4A261]"
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 justify-items-center"
          role="region"
          aria-labelledby="working-heading"
        >
          {planning.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="flex flex-col justify-between items-center gap-4 p-6 bg-white rounded-md transition-shadow duration-300 border-2 border-[#F4A261] w-full max-w-xs min-h-[300px]"
            >
              <div>
                <item.icon
                  className="w-[60px] h-[60px] bg-[#F4A261] hover:bg-[#2B3A55] fill-[#2B3A55] hover:fill-[#F9F7F3] p-3 rounded-full cursor-pointer transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-[#2B3A55] uppercase text-center">
                {item.title}
              </h3>
              <p className="text-[#A0AEC0] text-sm lg:text-base text-center">
                {item.about}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working;