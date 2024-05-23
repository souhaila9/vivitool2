import React from 'react'
import { motion} from 'framer-motion';
import { useRef } from 'react';
import { useInView } from "framer-motion"

function SecondSection() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <div ref={ref} className='  bg-bleu_clair  mt-20  items-center justify-center   '>
        <div  className='flex flex-col items-center justify-center p-8 md:p-20 '> 
      <motion.h1 
     initial={{y:-100, opacity:0}}
     animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
     transition={{ duration :0.6,}}
   
      
      className=' text-bigstone_950  font-semibold  text-center  text-4xl md:text-5xl  pb-10   '> COMMENT FONCTIONNE JOBFORSTUDENT</motion.h1>
<motion.p 

initial={{y:100, opacity:0}}
animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
transition={{ duration :0.6,}}

className='text-Dark_blue text-[18px] font-bold	text-center  md:text-lg leading-6 md:leading-8 mx-auto  max-w-full md:max-w-5xl'> JobForStudent est une <span className='text-yelow'> plateforme de recrutement </span>   basée sur un système de <span className='text-yelow'>matching affinitaire </span> <br></br>
<span className='text-yelow'> sur la base des valeurs et des compétences comportementales (softskills).</span> Notre objectif est<br></br>
d’aider les parties prenantes:<span className='text-pink'> Les Étudiants</span> , <span className='text-green'>Les Écoles </span> et Les<span className='text-marron'> Entreprises</span> à se développer sur les<br></br>
aspects liés au recrutement et à l’intégration. La plateforme facilitera le processus de recrutement<br></br>
de stagiaires et des alternants pour les startups en passant directement par les écoles.</motion.p>
    </div>
    </div>
  )
}

export default SecondSection