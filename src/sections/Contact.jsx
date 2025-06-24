import React from 'react';
import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';

const Contact = () => {
    return (
        <div id='contact'className='bg-white w-full'>
             <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>
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
                    Contact Us
                </motion.h1>
                <motion.h1
                variants={slideUpVariants}
                className='text-5xl font-bold text-black uppercase'
                >
                    Reach Us For Any Query
                </motion.h1>
                <div className='w-[120px] h-[6px] bg-yellow-500'></div>
                <p className='text-3xl italic text-gray-600 mt-[60px]'>We are the leader with 25 years of experience in the construction market!</p>

            </motion.div>
            
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={slideUpVariants}
            className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
            >
                <motion.form
                    initial="hidden"
                    whileInView='visible'
                    variants={zoomInVariants}
                    className='flex flex-col justify-center items-start gap-4 w-full'>
                        <input type='text' placeholder='Enter FullName' className='px-6 py-3 border-[2px] border-black w-full text-black rounded-lg'/>
                        <input type='email' placeholder='Enter Email' className='px-6 py-3 border-[2px] border-black w-full text-black rounded-lg'/>
                        <input type='number' placeholder='Enter Mobile Number' className='px-6 py-3 border-[2px] border-black w-full text-black rounded-lg'/>
                        <textarea type='text' rows='4' placeholder='Your Message' className='px-6 py-3 border-[2px] border-black w-full text-black rounded-lg'/>
                        <motion.button
                            variants={zoomInVariants}
                            className='bg-yellow-500 hover:bg-black text-black hover:text-white font-bold py-4 px-6 rounded-lg w-full'
                            >SUBMIT</motion.button>
                </motion.form>
            </motion.div>

        </div>
        </div>
    );
};

export default Contact;