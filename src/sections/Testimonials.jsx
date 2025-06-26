import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { clients } from '../export';

const Testimonials = () => {
  return (
    <div id="clients" className="w-full" >
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
          Testimonials
        </motion.h3>
        <motion.h2
          variants={slideUpVariants}
          className="uppercase text-white text-4xl lg:text-5xl font-bold text-center"
          id="testimonials-heading"
        >
          What They Say About Us
        </motion.h2>
        <motion.div
          variants={zoomInVariants}
          className="w-[120px] h-[6px] bg-[#F4A261]"
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center"
          role="region"
          aria-labelledby="testimonials-heading"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="flex flex-col justify-between items-center gap-4 p-6 duration-300 w-full max-w-sm min-h-[400px]"
            >
              <div className="border-2 border-white rounded-md p-6 text-center flex-grow">
                <p className="text-white text-sm lg:text-base italic">
                  {client.about}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 mt-[-60px]">
                <img
                  src={client.image}
                  alt={`${client.name}'s photo`}
                  className="w-[80px] h-[80px] rounded-full border-2 border-[#FFFFFF] object-cover"
                />
                <h3 className="uppercase text-lg lg:text-xl font-bold text-[#2B3A55]">
                  {client.name}
                </h3>
                <h4 className="text-white text-sm lg:text-base">
                  {client.post}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;