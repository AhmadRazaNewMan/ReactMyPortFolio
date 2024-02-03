import React from 'react'
import './SkillCards.css'

const SkillCards = ({title,iconUrl,isActive,onClick}) => {
  return (
    <div 
    className={`skills-card ${isActive ? "active":""}`}
    onClick={onClick}
    > 
        <div className="skills-title">
          <span className='title-setting'>{title}</span>
          </div>
        <div className="skill-icon">
           
           <span>{iconUrl} </span> 
        </div>
      
    </div>
  )
}

export default SkillCards
