import React from 'react';
import dev from '../../styles/img/dev.svg'

export const SkillPicture = () => {
  return (
    <div>
        <section className='skill__picture'>
            <div className='skills__dev'>
                <img src={dev} alt=" Dev image " />
            </div>
        </section>
    </div>
  )
}
