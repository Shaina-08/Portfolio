import React, {useState, useEffect} from 'react';
import './About.scss';
import { motion } from 'framer-motion'
 import { AppWrap} from '../../wrapper'

import '../../App.scss'
import {images} from '../../constants/index'
const abouts =[
{ title: 'Frontend Development', description : 'As a frontend developer, I excel in crafting engaging user interfaces and bringing creative designs to life with expertise in HTML, CSS, React and JavaScript.', imgUrl: images.about01},
{ title: 'Backend Development', description : 'Enthusiastic beginner in backend development, eager to gain more experience and grow skills in building server-side applications and APIs',imgUrl:images.about02},
{ title: 'Electrical Engineering', description : 'Pursuing an Electrical Engineering degree at NIT Hamirpur with a passion for innovative solutions and  technologies',imgUrl:images.about03},
{ title: 'Programmer', description : 'As a C++ programmer,I love developing optimized solutions to intricate problems, pushing the boundaries of computational efficiency.',imgUrl:images.about04}

]

const About = () => {
  return (
    <div id="about">
    <h2 className="head-text-1">
      

      The nature of the 
      
      
      <span>Portfolio   </span> 
      
      is that it's always a Work in Progress
    
    </h2>
    <div className="app__profiles">
    {abouts.map((about, index) => (
      <motion.div
      whileInView={{opacity :1}}
      whileHover={{ scale:1.1}}
      transition={{ duration:0.5, type:'tween'}}

      className="app__profile-item"
      key={about.title + index}

      >
      <img src={about.imgUrl} alt={about.title}/>
      <h2 className="bold-text" style={{marginTop:20}}>

        {about.title}
      </h2>
       <p className="p-text" style={{marginTop:10}}>

        {about.description}
      </p>
        
      </motion.div>
    ))}

    </div>
    </div>
  )
}

export default  AppWrap(About, 'about')