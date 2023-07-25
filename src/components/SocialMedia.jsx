import React from 'react'
// import { BsTwitter, BsLinkedIn} from 'react-icons/bs'
 import {AiFillLinkedin,
AiFillGithub,
    AiFillTwitterCircle} from 'react-icons/ai'
const SocialMedia = () => {
  return (
    <div className="app__social">

        <div>
            <a href="https://github.com/Shaina-08">
            <AiFillGithub/>

            </a>
        </div>
        <div>
             <a href="https://www.linkedin.com/in/shaina-bhardwaj-84a66a202">

            <AiFillLinkedin/>
             </a>
        </div>
        <div>
    <a href="https://twitter.com/@Shaina48222434">

            <AiFillTwitterCircle/>
    </a>
        </div>
    </div>
  )
}

export default SocialMedia