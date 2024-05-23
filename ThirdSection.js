import React from 'react'
import graduation from '../assets/graduation.png';
import { motion} from 'framer-motion';

function ThirdSection() {
  return (
    <div className=' flex flex-col  md:p-20	p-10 '>
     <div className='items-center justify-center' > 
       <h1 className=' text-bigstone_950 text-center font-semibold  md:text-5xl text-4xl pb-10	 '> UN RECRUTEMENT CIBLÉ : À CHACUN <br></br>SA SOLUTION</h1> 
       <div className=' flex  flex-col sm:flex-row gap-8 md:gap-20 sm:gap-10 items-center justify-center'>
       <div className=' bg-pink md:w-[120px] md:h-[120px]  w-[90px] h-[90px] bg-origin-content p-6 rounded-full'> 
        <motion.img
          whileHover={{ scale: 0.5 }}
           className=' w-full h-full '
            src={graduation} />
       
        </div>
        <div className=' bg-Atoll_800 md:w-[120px] md:h-[120px] w-[90px] h-[90px] bg-origin-content p-6 rounded-full'> 
        <motion.img
        whileHover={{ scale: 0.5 }} 
        className=' w-full h-full '
        src={graduation} /> 
        </div>
        <div className=' bg-bigstone_800  md:w-[120px] md:h-[120px] w-[90px] h-[90px] bg-origin-content p-6 rounded-full'> 
        <motion.img
        whileHover={{ scale: 0.5 }} 
         className=' w-full h-full '
        src={graduation} />
        
        </div>
       </div>

     </div>

    </div>
  )
}

export default ThirdSection