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
        className="flex gap-4 mb-5 pb-3 border-b-1"
      >
        <div className="font-thin text-sm md:text-base 2xl:text-lg flex-grow-0 flex-shrink basis-auto">
          <p>09/2019</p>
          <p>01/2024</p>
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
      <motion.article
        variants={variants}
        className="flex gap-4 pb-3 border-b-1"
      >
        <div className="font-thin text-sm md:text-base 2xl:text-lg flex-grow-0 flex-shrink basis-auto">
          <p>12/2017</p>
          <p>08/2019</p>
          <p>Santiago, Chile</p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl 2xl:text-2xl font-semibold">
            Gerente de Turno
          </h2>
          <p className="mb-5 text-sm 2xl:text-lg font-thin italic">
            Arcos Dorados Restaurantes Ltda.
          </p>
          <p className="text-sm md:text-base 2xl:text-xl">
            Coordiné operaciones en turnos diversos para asegurar la eficiencia
            del restaurante durante periodos de alta demanda. Garanticé la
            calidad y seguridad alimentaria, cumpliendo con normativas y
            expectativas de la marca. Gestioné personal, inventario y equipos
            para optimizar la operación y reducir costos sin comprometer la
            calidad
          </p>
        </div>
      </motion.article>
    </motion.div>
  );
};
