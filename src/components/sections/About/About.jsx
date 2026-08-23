import {
  FaLinkedin,
  FaGithub,
  FaCopy,
  FaDownload
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./About.css";
import { toast } from "sonner";

const About = () => {

  const copyText = async () => {
    await navigator.clipboard.writeText('santilopez397@gmail.com')
      .then(() => toast.success("Se ha copiado con éxito!"))
      .catch(() => toast.error("No se ha logrado copiar"))
  }

  return (
    <section id="about" className="flexCenter paddings innerWidth a-wrapper">
      <motion.article
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flexColStart a-container"
      >
        <h5 className="title">Sobre mí</h5>
        <p>
          Analista QA Senior con más de <strong>3 años</strong> de experiencia y mentalidad de desarrollador. Especialista en estrategias de
          calidad integral a lo largo de todo el ciclo de vida de desarrollo de software (SDLC), con enfoque en liderazgo
          técnico y optimización de procesos. Apasionado por la <strong>
            mentoría de equipos, el intercambio de conocimientos y la
            retroalimentación cualitativa
          </strong> para cerrar la brecha entre diseño e ingeniería.
        </p>
        <p>
          Estoy convencido de que la mejor
          calidad viene de un equipo que aprende y se adapta juntos
        </p>
        <div className="flexStart a-social">
          <a href="https://www.linkedin.com/in/sanmon12/" target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn de Santiago">
            <FaLinkedin title="LinkedIn" size={30} />
          </a>
          <a href="https://github.com/sanmon22" target="_blank" rel="noopener noreferrer" aria-label="Perfil de GitHub de Santiago">
            <FaGithub title="Github" size={30} />
          </a>
          <a href="/cv_en_santiago_monrroy_lopez.pdf" target="_blank" rel="noopener noreferrer" aria-label="Descargar currículum vítae de Santiago">
            <button className="btn-cv" aria-label="Descargar CV">
              CV
              <FaDownload />
            </button>
          </a>
        </div>
        <div className="flexStart a-mail">
          <span>santilopez397@gmail.com</span>
          <button onClick={copyText} aria-label="Copiar correo electrónico" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'inline-flex', alignItems: 'center', padding: 0 }}>
            <FaCopy title="Copiar" />
          </button>
        </div>
      </motion.article>
      <article className="flexColCenter innerWidth a-images">
        {/* Carousel placeholder */}
      </article>
    </section>
  );
};

export default About;
