import React, {useState} from 'react'
import '../App.scss'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
       {
          [
            'home', 'about', 'work', 'skills','contact'].map((item, index) => (
              
                
                <a
                 href={`#${item}`} 
                key={item+index}
                className="app__navigation-dot"
                 style={active === item ? {backgroundColor: 'grey'} : {}}
                 
                
                />
                    
              
            ))
        }
    </div>
  )
}

export default NavigationDots