import InfoCard from "../core/InfoCard";
import { motion } from "framer-motion";

export const Education = () => {
  const education = [
    {
      title: "Técnico en Programación y Análisis de Sistemas",
      place: "Instituto Profesional AIEP",
      description:
        "Durante mi carrera de Técnico en Programación y Análisis de Sistemas, adquirí una sólida base en programación, dominando lenguajes como JavaScript, Python y C#. Aprendí el desarrollo web y la maquetación utilizando HTML, CSS y Bootstrap, así como el framework Angular para el frontend. También obtuve conocimientos en bases de datos relacionales, análisis de requerimientos y metodologías de desarrollo tanto tradicionales como ágiles. Además, adquirí habilidades en la creación de diagramas UML y el modelado BPMN. En resumen, mi formación me proporcionó una comprensión integral de los sistemas informáticos, desde el desarrollo hasta la implementación, con un enfoque en la eficiencia y la calidad del software.",
      year: "2022-2024",
    },
    {
      title: "Curso de JavaScript",
      place: "Coderhouse",
      description:
        "Durante este curso intensivo, adquirí un profundo conocimiento y habilidades prácticas en el lenguaje de programación JavaScript. Desde los fundamentos hasta conceptos avanzados, este programa cubrió todos los aspectos clave de JavaScript, incluyendo manipulación del DOM, eventos, funciones, arrays, objetos, y mucho más.",
      year: "2023",
    },
    {
      title: "Curso de ReactJS",
      place: "Coderhouse",
      description:
        "Durante el programa, exploré los conceptos fundamentales de ReactJS, incluyendo componentes, props, state, ciclo de vida, enrutamiento y manejo de eventos. Aprendí a diseñar interfaces de usuario interactivas y dinámicas, utilizando las mejores prácticas de desarrollo y las últimas herramientas y tecnologías asociadas con ReactJS.",
      year: "2024",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.1, duration: 1 } }}
      className="grid grid-cols-1 gap-5 container-box"
    >
      {education.map((el, index) => (
        <motion.div key={index}>
          <InfoCard
            title={el.title}
            place={el.place}
            description={el.description}
            year={el.year}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
