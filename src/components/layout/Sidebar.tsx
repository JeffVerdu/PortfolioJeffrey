import React from "react";
import { motion } from "framer-motion";

export const Sidebar = () => {
  const scrollToSection = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const id = target.getAttribute("href")?.replace("#", "");
    const element = document.getElementById(String(id));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <aside className="hidden md:block bg-slate-900 fixed left-0 top-0 h-full w-1/4 text-white pt-5">
      <div className="rounded-full overflow-hidden md:w-20 lg:w-32 2xl:w-48 my-o mx-auto mb-8">
        <img src="/logo_jv_portfolio.jpeg" alt="" />
      </div>
      <motion.ul
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="flex flex-col gap-3 px-5 2xl:px-10 2xl:text-2xl 2xl:w-[50%]"
      >
        <motion.li variants={itemVariants}>
          <a
            onClick={scrollToSection}
            href="#about"
            className="block hover:bg-slate-950 rounded-lg py-1 px-2"
          >
            Sobre mi
          </a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <a
            onClick={scrollToSection}
            href="#education"
            className="block hover:bg-slate-950 rounded-lg py-1 px-2"
          >
            Educación
          </a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <a
            onClick={scrollToSection}
            href="#projects"
            className="block hover:bg-slate-950 rounded-lg py-1 px-2"
          >
            Proyectos
          </a>
        </motion.li>
        <motion.li variants={itemVariants}>
          <a
            onClick={scrollToSection}
            href="#resume"
            className="block hover:bg-slate-950 rounded-lg py-1 px-2"
          >
            Experiencia Laboral
          </a>
        </motion.li>
      </motion.ul>
    </aside>
  );
};
