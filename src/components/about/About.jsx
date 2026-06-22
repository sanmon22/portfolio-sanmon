import React from "react";
import { slides } from "../../utils/slides-images";
import {
  FaLinkedin,
  FaGithub,
  FaCopy,
  FaDownload
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./About.css";
import Carousel from "../carousel/Carousel";
import { Toaster, toast } from "sonner";

const About = () => {

  const copyText = async () => {
    await navigator.clipboard.writeText('santilopez397@gmail.com')
      .then(() => toast.success("Se ha copiado con éxito!"))
      .catch(() => toast.error("No se ha logrado copiar"))
  }

  return (
    <section id="about" className="flexCenter paddings innerWidth a-wrapper">
      <Toaster />
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
          <a href="https://www.linkedin.com/in/sanmon12/" target="_blank">
            <FaLinkedin title="LinkedIn" size={30} />
          </a>
          <a href="https://github.com/Santiago397" target="_blank">
            <FaGithub title="Github" size={30} />
          </a>
          <a href="/gl_santiago_monrroy_cv.pdf" target="_blank">
            <button className="btn-cv">
              CV
              <FaDownload />
            </button>
          </a>
        </div>
        <div className="flexStart a-mail">
          <span>santilopez397@gmail.com</span>
          <FaCopy title="Copiar" onClick={copyText} />
        </div>
      </motion.article>
      <article className="flexColCenter innerWidth a-images">
        {/* <Carousel slides={slides}/> */}
      </article>
    </section>
  );
};

export default About;
