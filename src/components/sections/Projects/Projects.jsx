import "./Projects.css"
import projects from '@/data/projects.json'
import { Chips } from '@/components/ui'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  return (
    <section id='projects' className="paddings innerWidth p-wrapper">
      <h5 className='title'>Proyectos</h5>
      <article className='innerWidth paddings p-container'>
        {
          projects.length > 0
            ? projects.map((p, index) => {
              return (
                <article className='innerWidth p-details' key={index}>
                  <section className='p-features'>
                    <h6>
                      <a href={p.link} target='_blank' rel='noopener noreferrer'>
                        {p.name}
                        <FaExternalLinkAlt title='Github' size={20} />
                      </a>
                    </h6>
                    <ul>
                      {
                        p.features.map((feature, idx) => <li key={idx}>{feature}</li>)
                      }
                    </ul>
                    <div className="flexCenter p-chips">
                      {
                        p.tech.map((t, idx) => <Chips key={idx} text={t} />)
                      }
                    </div>
                  </section>
                  <aside className='flexCenter innerWidth p-image'>
                    {
                      p.img.includes('http')
                      && <img src={p.img} height={200} alt={p.name} />
                    }
                  </aside>
                </article>
              )
            })
            : <h6 className='flexCenter paddings'>Trabajando en ello 🛠🛠</h6>
          }
      </article>
    </section>
  )
}

export default Projects
