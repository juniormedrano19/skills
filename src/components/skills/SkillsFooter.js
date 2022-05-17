import React from 'react';
import hero from '../../styles/img/hero.svg'


export const SkillsFooter = () => {
  return (
    <div>
        <div className='skills__footer'>
            <img src={hero} alt="image-footer" className='skills__footerPicture'/>
        </div>
        <p className='skills__copyright'> © Todos los derechos reservados. Junior Medrano. 2022</p>
    </div>
  )
}
