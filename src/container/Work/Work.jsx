import React, { useStae, useEffect} from 'react'

import { motion } from 'framer-motion'
import './Work.scss'
import '../../App.scss';
import {AppWrap } from '../../wrapper'



 

const Work = () => {
  return (


  <>
  
  <div className="main-section" id="work">
    <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
     

   {/* <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> */}
   <div className="heading">
      Projects
        
   </div>

    <div className="project-container">

    
   <motion.div
      whileInView={{opacity :1}}
      whileHover={{ scale:1.1}}
      transition={{ duration:0.5, type:'tween'}}
       >

      
        <div className="section">

        <div >
          <img  className="project-image" src="/Screenshot from 2023-07-25 22-31-13.png"  alt="" />
          </div>
        <div className="project-content">
          <h3 className="project-title">Portfolio Website</h3>
          <p className="project-description">
          Explore my portfolio, crafted with React, showcasing a collection of meticulously designed projects and personal accomplishments, brought to life with interactive animations and smooth user experiences.
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus aliquam massa sit amet pellentesque. */}
          </p>
        
          <div className="project-links">
            <a href="https://github.com/Shaina-08/Portfolio" target="_blank" rel="noopener noreferrer">Source Code</a>
            <a href="shaina-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">View</a>
          </div>

        </div>
        </div>
      </motion.div>
      <motion.div
      whileInView={{opacity :1}}
      whileHover={{ scale:1.1}}
      transition={{ duration:0.5, type:'tween'}}
      >

          <div className="section">

          <div >
          <img  className="project-image" src="/Screenshot from 2023-07-24 22-46-49.png"  alt="" /></div>
        <div className="project-content">
          <h3 className="project-title">Riddle World</h3>
          <p className="project-description">
          Unleash your puzzling prowess with my Google Chrome extension that presents an assortment of mind-bending riddles, providing a delightful challenge and moments of intellectual amusement during your browsing journey.
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus aliquam massa sit amet pellentesque. */}
          </p>
          <div className="project-links">
            <a href="https://github.com/Shaina-08/Riddle-Chrome-Extension" target="_blank" rel="noopener noreferrer">Source Code</a>
            <a href="https://github.com/Shaina-08/Riddle-Chrome-Extension" target="_blank" rel="noopener noreferrer">View</a>
          </div>
        </div>

          </div>
      </motion.div>

      
      <motion.div
      whileInView={{opacity :1}}
      whileHover={{ scale:1.1}}
      transition={{ duration:0.5, type:'tween'}}
       >

          <div className="section">


          <div >
          <img  className="project-image" src="/Screenshot from 2023-07-24 22-34-48.png"  alt="" /></div>
        <div className="project-content">
          <h3 className="project-title">React Dashboard</h3>
          <p className="project-description">
          Experience data visualization at its finest with my meticulously crafted React dashboard, offering real-time insights, intuitive user interface, and interactive charts to empower informed decision-making and streamline your workflow.
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus aliquam massa sit amet pellentesque. */}
          </p>
          <div className="project-links">
            <a href="https://github.com/Shaina-08/React-Admin" target="_blank" rel="noopener noreferrer">Source Code</a>
            <a href="https://dashboardbyshaina.netlify.app/" target="_blank" rel="noopener noreferrer">View</a>
          </div>
        </div>

          </div>
      </motion.div>
      <motion.div
      whileInView={{opacity :1}}
      whileHover={{ scale:1.1}}
      transition={{ duration:0.5, type:'tween'}}
      >

          <div className="section">


          <div >
          <img  className="project-image" src="/Screenshot from 2023-07-24 22-40-27.png"  alt="" /></div>
        <div className="project-content">
          <h3 className="project-title">Code Editor</h3>
          <p className="project-description">
          "Immerse yourself in the world of full-stack development with my cutting-edge code editor built on Socket.io, React, and Monaco Editor. Collaborate in real-time, leverage Monaco's powerful code editing capabilities, and elevate your coding experience to new heights
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus aliquam massa sit amet pellentesque. */}
          </p>
          <div className="project-links">
            <a href="https://github.com/user/project" target="_blank" rel="noopener noreferrer">Source Code</a>
            <a href="https://project.example.com" target="_blank" rel="noopener noreferrer">View</a>
          </div>
        </div>

          </div>
      </motion.div>

        
      </div>
          </div>
      </>
    );
  
};

export default AppWrap(Work, 'work');