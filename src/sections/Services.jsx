import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { allservices } from '../export';

const Services = () => {
  return (
    <div id="services" className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h3
          variants={slideUpVariants}
          className="text-[#F4A261] text-xl lg:text-2xl uppercase"
        >
          Special Offer
        </motion.h3>
        <motion.h2
          variants={slideUpVariants}
          className="uppercase text-[#2B3A55] text-4xl lg:text-5xl font-bold text-center"
        >
          Our Best Services
        </motion.h2>
        <motion.div
          variants={zoomInVariants}
          className="w-[120px] h-[6px] bg-[#F4A261]"
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-[20px] items-start mt-[30px]"
        >
          {allservices.map((service, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="flex flex-col justify-center items-start gap-5 p-6 "
            >
              <div className="flex justify-start items-center gap-4">
                <img src={service.icon} alt={`${service.title} icon`} className="w-[60px] p-2" />
                <div className="flex flex-col justify-center items-start gap-3">
                  <h3 className="text-lg lg:text-xl font-bold text-[#2B3A55]">
                    {service.title}
                  </h3>
                  <p className="text-[#2B3A55] text-sm lg:text-base">
                    {service.about}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;