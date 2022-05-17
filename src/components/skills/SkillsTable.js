import React from 'react'

export const SkillsTable = () => {

  const dataFirstTable=[
    {
      descripcion:'Salario Actual (Soles PE)',
      salario:3800,
      pretension:4500,
      disponibilidad:"inmediata",
      edad:"27",
      experience:6,

    },
    {
      descripcion:'Pretensión salarial (Soles PE)',
      salario:3800,
      pretension:4500,
      disponibilidad:"inmediata",
      edad:"27",
      experience:6,

    },
    {
      descripcion:'SalarioActual (Soles PE)',
      salario:3800,
      pretension:4500,
      disponibilidad:"inmediata",
      edad:"27",
      experience:6,

    },
    {
      descripcion:'SalarioActual (Soles PE)',
      salario:3800,
      pretension:4500,
      disponibilidad:"inmediata",
      edad:"27",
      experience:6,

    },
    {
      descripcion:'SalarioActual (Soles PE)',
      salario:3800,
      pretension:4500,
      disponibilidad:"inmediata",
      edad:"27",
      experience:6,

    },
    {
      descripcion:'SalarioActual (Soles PE)',
      salario:3800,
      pretension:4500,
      disponibilidad:"inmediata",
      edad:"27",
      experience:6,

    }

  ]

  return (
    <div>
      <section className="skills__tables">
        <div>
        <table className='skills__tableExperience'>
          <thead className='skills__ExperienceHead'>
            <tr>
            <th>Descripción</th>
            <th>Respuesta</th>
    
            </tr>
          </thead>
          <tbody className='skills__ExperienceBody'>
              <tr>
              <td>Salario actual(Soles PE)</td>
              <td>S/. 3800</td>
              
              </tr>
              <tr>
              <td>Pretensión salarial(Soles PE)</td>
              <td>S/. 4500</td>
              
              </tr>
              <tr>
              <td>Disponibilidad de incorporación</td>
              <td>Inmediata</td>
              
              </tr>
              <tr>
              <td>Años de experiencia laboral</td>
              <td>6 años</td>
              
              </tr>
             
          </tbody>
        </table>
        </div>
        <div>
          <table  className='skills__tableSkills'>
            <thead className='skills__skillsHead'>
              <tr>
              <th>Skill</th>
            <th>Si o No</th>
            <th>Tiempo de experiencia</th>
              </tr>
            
            </thead>
            <tbody className='skills__skillsBody'>
              <tr>
                <td>Javascript <i class="fa-brands fa-js"></i></td>
                <td>SI <i class="fa-solid fa-circle-check"></i></td>
                <td className='advanced'>4 años</td>
              </tr>
              <tr>
                <td>CSS3 <i class="fa-brands fa-css3-alt"></i></td>
                <td>SI <i class="fa-solid fa-circle-check"></i></td>
                <td className='medium'>3 años</td>
              </tr>
              <tr>
                <td>HTML <i class="fa-brands fa-html5"></i></td>
                <td>SI <i class="fa-solid fa-circle-check"></i></td>
                <td className='advanced'>5 años</td>
              </tr>
              <tr>
                <td>Manejo de APIS <i class="fa-solid fa-gear"></i></td>
                <td>SI <i class="fa-solid fa-circle-check"></i></td>
                <td className='medium'>3 años</td>
              </tr>
              <tr>
                <td>NodeJs <i class="fa-brands fa-node-js"></i></td>
                <td>SI <i class="fa-solid fa-circle-check"></i></td>
                <td className='basico'>1 año</td>
              </tr>
              <tr>
                <td>React JS <i class="fa-brands fa-react"></i></td>
                <td>SI <i class="fa-solid fa-circle-check"></i></td>
                <td className='medium'>3 años</td>
              </tr>
              <tr>
                <td>Vue JS <i class="fa-brands fa-vuejs"></i></td>
                <td>SI <i class="fa-solid fa-circle-check"></i></td>
                <td className='basico'>1/2 año</td>
              </tr>

            </tbody>
          </table>
        </div>
       
      </section>
    </div>
  )
}
