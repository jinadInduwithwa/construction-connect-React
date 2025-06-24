import React from 'react';
import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';
import { allservices } from '../export';

const Services = () => {
    return (
        <div id='services' className='w-full bg-white'>
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'

            >
                <motion.h3
                variants={slideUpVariants}
                className='text-yellow-500 text-2xl uppercase'
                >
                    Special Offer
                </motion.h3>
                <motion.h2
                variants={slideUpVariants}
                className='uppercase text-black text-5xl font-bold text-center'
                >Our Best Services</motion.h2>
                <motion.div
                variants={zoomInVariants}
                className='w-[120px] h-[6px] bg-yellow-500'
                >
                </motion.div>
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={zoomInVariants}
                className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center
                gap-[20px] items-start mt-[30px]'
                >
                    {
                        allservices.map((service, index) => (
                            <motion.div
                            key={index}
                            variants={zoomInVariants}
                            className='flex justify-center items-start gap-5 p-8'
                            >
                                    <img src={service.icon} alt='icon' className='w-[70px] border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg p-2'/>
                                    <div className='flex flex-col justify-center items-start gap-3'>
                                        <h3 className='text-xl font-bold text-black'>{service.title}</h3>
                                        <p className='text-[18px]'>{service.about}</p>
                                    </div>

                            </motion.div>
                        ))
                    }

                </motion.div>
            </motion.div>

        </div>
    );
};

export default Services;