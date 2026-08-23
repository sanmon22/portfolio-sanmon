import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { FaCircleArrowUp } from "react-icons/fa6";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    if (window.history.replaceState) {
      window.history.replaceState(null, null, window.location.pathname)
    }
  }

  return (
    <section className="paddings innerWidth n-wrapper">
      {
        isOpen ?
        <IoIosClose
            className="icon"
            size={30}
            aria-label="Cerrar menú"
            role="button"
            tabIndex={0}
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
          />
        :
        <BiMenuAltRight
          className="icon"
          size={30}
          aria-label="Abrir menú"
          role="button"
          tabIndex={0}
          onClick={() => setIsOpen(true)}
          onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
        />
      }
      <nav
        className='paddings n-container'
        aria-label="Navegación principal"
      >
        <ul className={`n-list ${isOpen && "mobile"}`}>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#about">Sobre mí</a></li>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#experience">Experiencia</a></li>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <button className="up-btn-container" onClick={menuClick} aria-label="Volver arriba" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        <FaCircleArrowUp className="up-btn" size={30} />
      </button>
    </section>
  );
};

export default Navbar;
