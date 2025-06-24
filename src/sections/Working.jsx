import React from 'react';
import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';
import { allservices, planning } from '../export';
const Working = () => {
    return (
        <div id='working' className='w-full bg-white'>
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
                    Step by Step
                </motion.h3>
                <motion.h2
                variants={slideUpVariants}
                className='uppercase text-black text-5xl font-bold text-center'
                >How It's Working</motion.h2>
                <motion.div
                variants={zoomInVariants}
                className='w-[120px] h-[6px] bg-yellow-500'
                >
                </motion.div>

                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={zoomInVariants}
                className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center
                gap-[20px] items-start mt-[30px]'
                >
                    {
                        planning.map((item,index) =>(
                            <div key={index} className='flex flex-col justify-center items-center gap-5 border-2 border-yellow-500 rounded-md p-6'>
                                <div>
                                <item.icon className='size-[80px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer'/>
                                </div>
                                <h1 className='text-2xl font-bold uppercase'>{item.title}</h1>
                                <p className='text-[20px] text-center text-gray-600'>{item.about}</p>
                                </div>
                        ))
                    }

                </motion.div>

            </motion.div>
        </div>
    );
};

export default Working;