import { FileCode2, Inbox, MapPin } from "lucide-react";
import { Mail } from "../core/Mail";
import { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";

export const About = ({ isVisible }: { isVisible: boolean }) => {
  const [showMail, setShowMail] = useState(false);

  const leftVariants: Variants = {
    offscreen: {
      x: -150,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const rightVariants: Variants = {
    offscreen: {
      x: 150,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    setShowMail(isVisible);
  }, [isVisible]);

  return (
    <div className="block md:grid grid-cols-2 justify-center items-center gap-5 pt-14">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.div variants={leftVariants}>
          <h2 className="text-3xl font-bold 2xl:text-6xl">Jeffrey Verdú</h2>
          <p className="text-lg 2xl:text-2xl font-thin italic mb-5">
            Frontend Developer
          </p>
          <p className="text-md 2xl:text-2xl font-bold flex gap-2 items-center mb-1">
            <FileCode2 size={20} color="#ffffff" />
            ReactJS | HTML | CSS | SASS | TailwindCSS
          </p>
          <div className="flex items-center gap-2  mb-1">
            <Inbox size={20} color="#ffffff" />

            {!showMail && (
              <Mail
                classes="text-sm 2xl:text-2xl font-normal flex gap-2 items-center"
                iconSize={15}
              />
            )}
          </div>
          <p className="mb-3 2xl:text-2xl mt-5">¡Bienvenid@ a mi portafolio!</p>
          <p className="text-base 2xl:text-2xl mb-2">
            Soy egresado como Técnico en Programación y Análisis de Sistemas y
            apasionado por el desarrollo web.
          </p>
          <p>
            Durante mis estudios, he realizado proyectos utilizando tecnologías
            como{" "}
            <strong>
              ReactJS, HTML, CSS, SASS, TailwindCSS, FramerMotion y NextUI
            </strong>
            . Actualmente trabajo de manera independiente.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
        className="my-0 mx-auto"
      >
        <motion.div variants={rightVariants}>
          <img src="/foto_portafolio.png" alt="Jeffrey Verdú" />
        </motion.div>
      </motion.div>
    </div>
  );
};
