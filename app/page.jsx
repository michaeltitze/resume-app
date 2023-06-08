import React from 'react'
import AboutMe from './components/about-me'
import {aboutMe, skills, professionalData} from "../data/page-data"
import ProfessinalExperience from "./components/professional-experience";
const page = () => {
  return (
    <div className=''>
        <AboutMe data={aboutMe} skills={skills} />
        <ProfessinalExperience data={professionalData} />
        </div>
  )
}

export default page