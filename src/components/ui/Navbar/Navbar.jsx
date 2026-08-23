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
            onClick={() => setIsOpen(false)}
          />
        :
        <BiMenuAltRight
          className="icon"
          size={30}
          onClick={() => setIsOpen(true)}
        />
      }
      <nav
        className='paddings n-container'
      >
        <ul className={`n-list ${isOpen && "mobile"}`}>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#about">Sobre mí</a></li>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#experience">Experiencia</a></li>
          <li onClick={() => setIsOpen(!isOpen)}><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <a onClick={menuClick}>
        <FaCircleArrowUp className="up-btn" size={30} />
      </a>
    </section>
  );
};

export default Navbar;
