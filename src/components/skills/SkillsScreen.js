import React from 'react'
import { SkillNavbar } from './SkillNavbar'
import { SkillPicture } from './SkillPicture'
import { SkillsFooter } from './SkillsFooter'
import { SkillsTable } from './SkillsTable'

export const SkillsScreen = () => {
  return (
    <div>
        <SkillNavbar />

        <section className='skills__containersMain contenedor'>
        <SkillPicture />
        <SkillsTable />
        
        </section>

        <footer>
            <SkillsFooter />
        </footer>
     

    </div>
  )
}
