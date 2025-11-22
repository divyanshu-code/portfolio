import React from 'react'
import image1 from '/public/photo1.png'
import image2 from '/public/photo2.png'
import image4 from '/public/photo4.jpg'
import { motion } from 'framer-motion'

const projects = [
   {
      image: image2,
      title: 'Food Paradise',
      description: 'A restaurant  website that displays the menu and contact information also developed a fully functional with an interactive UI for customers.',
      technologies: ['Html5', 'CSS3', 'Tailwind Css','Local Storage', 'React', 'Node.js', 'Express.js', 'MongoDB','Framer Motion'],
      github: "https://github.com/divyanshu-code/Food_Paradise"

   },
   {
      image: image1,
      title: 'FuelFit',
      description: 'FuelFit is a full-stack fitness tracking application designed to help you stay consistent on your health journey.',
      technologies: ['Html5', 'CSS3', 'React', 'Local Storage','Node.js', 'Express.js','MongoDB', 'Framer Motion','GSAP'],
      github: "https://github.com/divyanshu-code/FuelFit"


   },
   {
      image: image4,
      title: 'Portfolio',
      description: 'A portfolio website that displays about me , my projects, skills and contact information.',
      technologies: ['Html', 'Tailwind Css', 'React', 'Framer Motion'],
      github: "https://github.com/divyanshu-code/Portfolio"
   }

]

const ProjectCard = ({ project }) => {
   return (


      <motion.div
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}

         className='flex flex-col gap-3 items-center md:flex-row md:gap-24 '>
         <img src={project.image} alt="error" className='w-full cursor-pointer rounded-2xl transition-all duration-300
        hover:scale-105 md:w-[300px]'/>

         <div className='flex flex-col gap-5'>

            <div className='flex flex-col gap-3'>
               <div className='text-xl font-semibold'>{project.title}</div>
               <p className='text-gray-400'>{project.description}</p>
            </div>

            <div className='flex  flex-wrap lg:gap-5 gap-3'>
               {
                  project.technologies.map((tech, index) => (
                     <span key={index} className='border cursor-pointer rounded-lg bg-black lg:p-3 p-2'>{tech}
                     </span>

                  ))
               }

               <a href={project.github} className='border rounded-lg bg-black lg:p-3 p-2'> Github Link </a>

            </div>
         </div>
      </motion.div>

   )
}

const Projects = () => {

   return (

      <div id='pro' className=' flex min-h-screen flex-col items-center justify-center gap-16 p-4 w-full md:px-14 md:py-24'>


         <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}

            className='text-4xl font-light text-white md:text-6xl'>My Projects</motion.h1>


         <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>

            {
               projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
               ))

            }
         </div>
      </div>

   )
}

export default Projects
