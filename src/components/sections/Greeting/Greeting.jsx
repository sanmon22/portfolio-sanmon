import "./Greeting.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Greeting = () => {
  return (
    <section className="flexCenter paddings innerWidth g-wrapper">
      <article className="flexCenter innerWidth g-head">
        <aside className="flexCenter innerWidth g-titles">
          <div>
            <TypeAnimation
              className="title"
              preRenderFirstString={true}
              sequence={[700, "Hola, soy", 700, "Hello, I'm"]}
              cursor={false}
              repeat={Infinity}
            />
            <h1 className="g-name">
              Santiago<span className="sr-only"> Monrroy López</span>
            </h1>
            <p className="g-subtitle">
              Ingeniero de software y
              <br />
              especialista en calidad
            </p>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1.5,
              x: { duration: 1 },
            }}
            className="g-image"
            src="/personal-col.webp"
            alt="Santiago Monrroy López - Ingeniero de Software y Especialista QA"
            width={433}
            height={577}
            fetchPriority="high"
            decoding="async"
          />
        </aside>
      </article>
    </section>
  );
};

export default Greeting;
