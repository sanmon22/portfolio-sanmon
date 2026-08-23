import { useState } from 'react'
import './Contact.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { toast } from 'sonner';

const Contact = () => {

  const [formData, setFormData] = useState({fullName: "", email: "", message: "" })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Mensaje enviado", {
      style: {
        background: "#1A120B",
        color: "#D5CEA3"
      }
    })
    setFormData({fullName: "", email: "", message: "" })
  }

  return (
    <section id='contact' className='paddings innerWidth c-wrapper'>
      <h5 className='title'>Ponte en contacto</h5>
      <article className="flexCenter innerWidth c-content">
        <section className='c-form'>
          <form onSubmit={handleSubmit}>
            <label className='flexColStart' htmlFor="fullName">
              ¿Cómo es tu nombre? *
              <input
                id="fullName"
                required
                placeholder='Elon Musk'
                autoComplete="name"
                type="text"
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
              />
            </label>
            <label className='flexColStart' htmlFor="email">
              ¿Cuál es tu correo? *
              <input
                id="email"
                required
                placeholder='elon.musk@tesla.com'
                autoComplete="email"
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className='flexColStart' htmlFor="message">
              Deja tu mensaje
              <textarea
                id="message"
                rows={10}
                maxLength={150}
                placeholder='Manda un saludo :P'
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <button type="submit">
              Enviar
            </button>
          </form>
        </section>
        <aside className='flexColCenter c-text'>
          <p>
          Estoy en busca de oportunidades para crecer tanto personal como profesionalmente. Además, me encantaría conectar con personas que compartan ideas que hagan volar la imaginación.  😊
          <br /><br />
          Si conoces una oportunidad, deseas enviar algún consejo, alguna pregunta, ¡o simplemente quieres saludar!, ¡mi bandeja de entrada siempre está abierta y lista para recibirte! 📬
          </p>
          <div className="flexCenter c-icons">
            <a href="https://www.linkedin.com/in/sanmon12/" target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn de Santiago">
              <FaLinkedin title="LinkedIn" size={30} />
            </a>
            <a href="https://github.com/sanmon22" target="_blank" rel="noopener noreferrer" aria-label="Perfil de GitHub de Santiago">
              <FaGithub title="Github" size={30} />
            </a>
          </div>
        </aside>
      </article>
    </section>
  )
}

export default Contact

/*
*/
