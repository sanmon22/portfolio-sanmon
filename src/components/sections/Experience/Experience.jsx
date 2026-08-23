import './Experience.css'
import experiences from '@/data/experiences.json'
import { motion } from "framer-motion";
import { Chips, Timeline } from '@/components/ui'

const Experience = () => {
  return (
    <section id='experience' className="paddings innerWidth e-wrapper">
      <motion.article 
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.75 }}
        className="flexColStart e-container"
      >
        <h5 className="title">Experiencia</h5>
        <div className="e-list">
          {
            experiences.map((exp) => {
              return (
                <article key={exp.company} className='flexColStart innerWidth e-content'>
                  <div className="flexColStart e-subtitle">
                    <h6>{exp.company}</h6>
                    <span>{exp.role}</span>
                    <span>{exp.start} - {exp.end}</span>
                  </div>
                  <ul className='e-duties'>
                    {
                      exp.duties.map((duty, idx) => <li key={idx} >{duty}</li>)
                    }
                  </ul>
                  <div className='flexCenter e-chips'>
                    {
                      exp.tech.map((t, idx) => <Chips key={idx} text={t} />)
                    }
                  </div>
                </article>
              )
            })
          }
        </div>
      </motion.article>
      <motion.article
        variants={{
          hidden: { opacity: 0, x: 150 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.75 }}
        className="flexColCenter innerWidth  time-line"
      >
        <Timeline />
      </motion.article>
    </section>
  )
}

export default Experience
