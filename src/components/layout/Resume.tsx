import { Variants, motion } from "framer-motion";

export const Resume = () => {
  const variants: Variants = {
    offscreen: {
      x: -120,
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

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.article
        variants={variants}
        className="md:flex gap-4 mb-5 pb-3 border-b-1"
      >
        <div className="font-thin text-sm md:text-base 2xl:text-lg basis-[30%] flex-grow-0 flex-shrink">
          <p>06/2024 - En curso</p>
          <p>Santiago, Chile - En remoto</p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl 2xl:text-2xl font-semibold">
            Desarrollador Fullstack
          </h2>
          <p className="mb-5 text-sm 2xl:text-lg font-thin italic">Dynamic</p>
          <p className="text-sm md:text-base 2xl:text-xl">
            Parte del equipo de desarrollo de una innovadora aplicación web para
            la administración integral de proyectos en la industria eléctrica
            del país. Esta aplicación, construida con <strong>PHP</strong> y el
            framework <strong>Laravel</strong>, ofrece funcionalidades avanzadas
            para la supervisión, seguimiento y coordinación de proyectos. La
            base de datos se gestiona a través de <strong>SQL</strong>,
            asegurando un almacenamiento eficiente y consultas optimizadas para
            la complejidad y el volumen de datos de la industria eléctrica.
          </p>
        </div>
      </motion.article>
      <motion.article
        variants={variants}
        className="md:flex gap-4 mb-5 pb-3 border-b-1"
      >
        <div className="font-thin text-sm md:text-base 2xl:text-lg basis-[30%] flex-grow-0 flex-shrink">
          <p>05/2024 - 06/2024</p>
          <p>Mendoza, Argentina - En Remoto</p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl 2xl:text-2xl font-semibold">
            Desarrollador de Aplicación Web
          </h2>
          <p className="mb-5 text-sm 2xl:text-lg font-thin italic">
            PosicionAR!
          </p>
          <p className="text-sm md:text-base 2xl:text-xl">
            Desarrollo de una aplicación web dedicada a la publicación de
            anuncio. La aplicación está construida con <strong>ReactJS </strong>
            y los servicios de <strong>Firebase</strong>: Firestore Database
            para almacenar la información de los anuncios, Storage para
            almacenar las imagenes de los anuncios y Authentication para la
            autenticación de los usuarios.
          </p>
        </div>
      </motion.article>
      <motion.article
        variants={variants}
        className="md:flex gap-4 mb-5 pb-3 border-b-1"
      >
        <div className="font-thin text-sm md:text-base 2xl:text-lg basis-[30%] flex-grow-0 flex-shrink">
          <p>06/2024 - 07/2024</p>
          <p>Texas, EEUU - En Remoto</p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl 2xl:text-2xl font-semibold">
            Desarrollador Frontend
          </h2>
          <p className="mb-5 text-sm 2xl:text-lg font-thin italic">
            LSV SERVICE, LLC
          </p>
          <p className="text-sm md:text-base 2xl:text-xl">
            Diseño y desarrollo de una Landing Page con 5 secciones, enfocada en
            proporcionar una experiencia de usuario intuitiva y atractiva. Hecha
            con <strong>HTML, CSS y JavaScript</strong>
          </p>
        </div>
      </motion.article>
      <motion.article
        variants={variants}
        className="md:flex gap-4 mb-5 pb-3 border-b-1"
      >
        <div className="font-thin text-sm md:text-base 2xl:text-lg basis-[30%] flex-grow-0 flex-shrink">
          <p>09/2019 - 01/2024</p>
          <p>Santiago, Chile</p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl 2xl:text-2xl font-semibold">Jefe de taller</h2>
          <p className="mb-5 text-sm 2xl:text-lg font-thin italic">
            Imprenta Altamar MKT SpA
          </p>
          <p className="text-sm md:text-base 2xl:text-xl">
            Supervisé operaciones diarias en un taller, coordinando equipos y
            recursos para cumplir con plazos establecidos. Mantuve altos
            estándares de calidad controlando procesos de producción, asegurando
            cumplimiento de especificaciones y promoviendo mejora continua.
            Implementé estrategias para optimizar recursos, reduciendo costos
            operativos.
          </p>
        </div>
      </motion.article>
    </motion.div>
  );
};
