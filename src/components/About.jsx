import React from 'react';
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className = 'xs:w-[250px] w-full'>
      <motion.div
        variants = {fadeIn("right","spring",0.5*index, 0.75)}
        className = "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options ={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src = {icon} alt = {title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants = {textVariant()}>
        <p className= {styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants = {fadeIn("", "" ,0.1, 1)}
        className = "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Master of Engineering graduate in Electrical
         & Computer Engineering with expertise in
          software development, machine learning, 
          data engineering, and cloud computing. 
          Proficient in Python, Java, JavaScript 
          (React, Node.js), SQL, and cloud platforms
           (Azure, AWS, GCP), with experience in 
           building scalable applications, optimizing
            machine learning pipelines, and developing
             full-stack solutions.
              Skilled in CI/CD, API development, 
              and system performance optimization, 
              with a strong foundation in algorithms, 
              data structures, and software engineering
               best practices. Passionate about leveraging 
               technology to develop scalable, high-impact solutions across various industries.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key = {service.title} index = {index} {...service} />
        ))

        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")