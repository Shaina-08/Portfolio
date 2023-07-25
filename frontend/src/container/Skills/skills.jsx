import React from 'react'
import './skills.scss'

import '../../App.scss'
import {AppWrap } from '../../wrapper'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
//   faCss3,
//   faGit,
//   faHtml5,
//   faJsSquare,
//   faNodeJs,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons";
 import { FaReact ,FaCss3Alt, FaNodeJs} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
 import {BiGitMerge} from 'react-icons/bi'
  import {TbBrandJavascript} from 'react-icons/tb'
  import {

  TbBrandCpp,
  TbBrandTailwind,
  TbBrandSocketIo, TbBrandGithubCopilot } from 'react-icons/tb'
  
   import {SiExpress} from 'react-icons/si'
  import {GrMysql} from 'react-icons/gr'


const skills = () => {

  
  return (
    <>
    
    <div className="skills_section" id="skills">

      <h2 className="skills">SKILLS</h2>
      <div className="small">Web developer and coder creating innovative digital solutions with a
       blend of creativity and technical expertise . Constantly exploring new 
     technologies and pushing boundaries to deliver 
      seamless user experiences and 
     efficient code</div>

      {/* <div>
        <h3>Web Developer</h3>
        <p>hyyyyyy</p>
      </div>
      <div>
        <h3>Web Developer</h3>
        <p>hyyyyyyy</p>
      </div> */}

        <div className="stage-cube-cont">
          <div class="animation-wrapper">
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
            <div class="particle particle-4"></div>
          </div>
          <div className="cubespinner">
            <div className="face1">
             <FaReact/>
            </div>
            <div className="face2">
              <AiOutlineHtml5/>
            </div>
            <div className="face3">
              <FaCss3Alt/>
            </div>
            <div className="face4">
              <TbBrandJavascript/>
            </div>
            <div className="face5">
              <BiGitMerge/>
            </div>
            <div className="face6">
              <FaNodeJs/>
            </div>
          </div>
          <div className="another">

          
          <div class="animation-wrapper">
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
            <div class="particle particle-4"></div>
          </div>
          <div className="cubespinner">
            <div className="face11">
             <TbBrandCpp/>
            </div>
            <div className="face22">
              <TbBrandGithubCopilot/>
            </div>
            <div className="face33">
              <TbBrandSocketIo/>
            </div>
            <div className="face44">
              <TbBrandTailwind/>
            </div>
            <div className="face55">
              <SiExpress/>
            </div>
            <div className="face66">
              <GrMysql/>
            </div>
          </div>
          </div>

          
        </div>
    <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
     </div>
        
        
        
        
             
     
    </>
    
  )
}

export default  AppWrap(skills, 'skills' )