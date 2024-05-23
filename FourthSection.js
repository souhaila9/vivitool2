import React from 'react'
import Right from '../assets/Right.webp';

function FourthSection() {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center p-20 '>
        <div className='flex flex-1 flex-col justify-center items-start		 gap-4'> 
           <h1 className=' font-medium	text-bigstone_950 text-3xl '> TU ES ÉTUDIANT ? VALORISE TES
             COMPÉTENCES <br></br> COMPORTEMENTALES (SOFTSKILLS)
          
            </h1>
            <p className=' 	text-bigstone_950 '> Tu es étudiant.e ? Et tu es à la recherche d’un stage ou de ta future
            alternance ? Oui, mais voilà<br></br> tu as peu ou pas d’expérience professionnelle
            et tu ne sais pas comment t’y prendre ni même<br></br> quoi mettre en avant pour
            te démarquer ? Pas d’inquiétude ! Tu as quelque chose d’encore plus<br></br>
            précieux : tes softskills.Bonne nouvelle : ces compétences personnelles et
            sociales sont de plus<br></br> en plus valorisées dans le monde du travail.
            Notre plateforme t’apprendra à les reconnaître et à <br></br>mettre en avant tes
            compétences les plus précieuses,sur ton CV et lors de tes entretiens <br></br>
            d’embauche. Avec JobForStudent mets en valeur tes softskills et commence
            ton parcours<br></br> professionnel avec confiance et détermination.</p>
        </div>
        <div className='flex flex-1 justify-center items-center'> 
        <img src={Right} alt="HeroSection" className=' w-full h-full   '	 />

        </div>
    </div>
  )
}

export default FourthSection