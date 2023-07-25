import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap} from '../../wrapper'
import { images } from '../../constants/index'
import './Header.scss'
import Spline from '../Spline/Spline';
import Splinetool from '../Spline/Spline';

const scaleVariants= {
  whileInView:{
     scale:[0,1],
     opacity:[0,1],
     transition: {
      duration: 1,
      ease: 'easeInOut'
     }
     
  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>

            </span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text"> Hello, I am

              </p>
              <h1 className="head-text">Shaina</h1>

            </div>


          </div>

          <div className="tag-cmp app__flex">
          <p className="p-text"> 
          Web Developer
          </p>
          <p className="p-text"> 
           Programmer
              </p>
          </div>
        </div>
      </motion.div>



      <motion.div
      whileInView={{  opacity: [0, 1] }}
        transition={{ duration: 0.4 , delayChildren:0.5}}
        className="app__header-img">
           <Splinetool/>
          
      </motion.div>
      
      {/* <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[images.css, images.react, images.sass].map((circle, index)=>{
          <div className="circle-cmp app__flex " key={`circle-${index}`}
          
          >

          </div>
        })}
      </motion.div> */}

    </div>
  )
}

export default AppWrap(Header, 'home');