import React, { useState } from 'react'
import './Skills.css'
import{ SKILLS} from '../../utils/data'
import SkillCards from './SkillCards/SkillCards'
import SkillCardInfo from './SkillCardInfo/SkillCardInfo'

const Skills = () => {
  const [selectedSkill,setSelectedSkill] = useState(SKILLS[0])

  const handleSelectedSkill = (data)=>{
    setSelectedSkill(data)
   
  }
  return (
    <section className='skills-container'> 
    <div><h5>Techniqual Proficiency</h5>
     <div className="skills-content">
      
        <div className="skills">
            {SKILLS.map((item)=>(
                <SkillCards 
                key={item.title}    
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title===item.title}
                onClick={()=>{
                  handleSelectedSkill(item)
                }}
                
                />
            ))}
        </div>
     </div></div>
     <div className="skills-info">
      

      <SkillCardInfo heading={selectedSkill.title}
      skills = {selectedSkill.skills}/>
         
     </div>
    </section>
  )
}

export default Skills
