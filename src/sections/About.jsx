import React from 'react';
import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';

const About = () => {
    return (
        <div id='about' className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={slideUpVariants}
            className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
            >
                <motion.h1
                variants={slideUpVariants}
                className='uppercase text-yellow-500 text-2xl'
                >
                    Welcome to
                </motion.h1>
                <motion.h1
                variants={slideUpVariants}
                className='text-5xl font-bold text-white uppercase'
                >
                    MS Construction
                </motion.h1>
                <div className='w-[120px] h-[6px] bg-yellow-500'></div>
                <p className='text-3xl italic text-gray-50 mt-[60px]'>Your Trusted Partner in Construction for Over 25 Years</p>

            </motion.div>
            
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={slideUpVariants}
            className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
            >
                <p className='text-white text-lg text-justify'>With a wealth of experience in the construction industry, Sumon Structures leads the way in delivering quality, safety, and reliability. Our team of experts is dedicated to providing the highest standards in every project, big or small.</p>
                <p className='text-white text-lg text-justify'>Explore our extensive portfolio and discover why we are the go-to builders for projects across the region.</p>
                <motion.button
                variants={zoomInVariants}
                className='bg-yellow-500 hover:bg-white  text-white hover:text-black py-3 px-10 rounded-md hover:bg-yellow
                -600 transition duration-300 font-bold'
                >
                
                
                
                    Learn More
                </motion.button>
            </motion.div>

        </div>
    );
};

export default About;