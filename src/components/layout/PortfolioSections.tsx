import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy, Download, Linkedin, Mail } from "lucide-react";
import { education, projects, skills } from "../../data/portfolio";

export function ExperienceDetails() {
  return (
    <div className="page-width experience-list">
      <article className="experience-entry">
        <div className="experience-context"><p>Ago 2024 — Actualidad</p><p>Santiago, Chile</p></div>
        <div className="experience-body">
          <h3>Academia Desafío Latam</h3>
          <p className="experience-focus">Desarrollo Full Stack y gestión administrativa</p>
          <p className="official-role">Cargo oficial: Administrador de Recursos Administrativos, con funciones de desarrollo dentro del mismo equipo.</p>
          <div className="experience-contributions">
            <div><h4>Desarrollo en producción</h4><p>Construyo y mantengo funcionalidades en una plataforma Ruby on Rails dockerizada: lógica de negocio, modelos de datos, controladores, vistas y flujos de usuario.</p></div>
            <div><h4>Diagnóstico y mantenimiento</h4><p>Resuelvo incidencias con análisis de logs, validación de datos y seguimiento de procesos con Sidekiq. Trabajo con Docker, Git/GitLab, PostgreSQL y APIs REST, y participé en el seguimiento de despliegues en AWS.</p></div>
            <div><h4>Gestión en paralelo</h4><p>Administro procesos financieros en SAP: facturación de pagos, cobranza, conciliaciones bancarias y atención a estudiantes en sus temas financieros.</p></div>
          </div>
          <p className="experience-stack">Ruby on Rails · JavaScript · PostgreSQL · Docker · Git/GitLab · AWS · Redis/Sidekiq</p>
        </div>
      </article>
      <article className="experience-entry previous-experience">
        <div className="experience-context"><p>Sep 2019 — Ene 2024</p><p>Santiago, Chile</p></div>
        <div className="experience-body">
          <h3>Altamar MKT SpA</h3>
          <p className="experience-focus">Jefe de Taller</p>
          <p className="experience-description">Coordiné equipos, recursos y procesos operativos para cumplir plazos y estándares de calidad. La organización, la priorización y la resolución de problemas bajo presión son habilidades que hoy aplico al desarrollo y a la gestión de incidencias.</p>
        </div>
      </article>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section page-width" aria-labelledby="projects-heading">
      <div className="section-heading section-heading-light"><h2 id="projects-heading">Del código<br />a la práctica.</h2><p>Dos proyectos personales.<br />Distintos problemas, soluciones concretas.</p></div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-entry" key={project.id}>
            <a className="project-preview" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${project.name} (abre otra pestaña)`}>
              <div className="preview-bar"><span>{project.host}</span><ArrowUpRight size={18} aria-hidden="true" /></div>
              <img src={project.image} srcSet={`${project.image.replace(".webp", "-640.webp")} 640w, ${project.image} ${project.imageWidth}w`} sizes="(max-width: 950px) 92vw, 50vw" width={project.imageWidth} height={project.imageHeight} loading="lazy" decoding="async" alt={`Captura de ${project.name}: ${project.id === "posicionar" ? "buscador, categorías y anuncios destacados" : "presentación de servicios de construcción"}`} />
            </a>
            <div className="project-copy">
              <h3>{project.name}</h3>
              <p className="project-type">{project.type} <span aria-hidden="true">·</span> {project.date}</p>
              <p className="project-description">{project.description}</p>
              <ul className="technology-list" aria-label="Tecnologías">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
              <details className="project-details"><summary>Qué desarrollé <ArrowDown size={17} aria-hidden="true" /></summary><ul>{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul><p>{project.location} · Proyecto personal</p></details>
              <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${project.name} (abre otra pestaña)`}>Ver proyecto <ArrowUpRight size={20} aria-hidden="true" /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function KnowledgeSection() {
  return (
    <section id="skills" className="knowledge-section" aria-labelledby="skills-heading">
      <div className="page-width knowledge-layout">
        <div className="knowledge-intro"><h2 id="skills-heading">Herramientas,<br />con contexto.</h2><p>Mi experiencia en producción está centrada en Ruby on Rails. La complemento con desarrollo frontend y formación Full Stack JavaScript.</p><a href="#education" className="text-link">Ver formación <ArrowDown size={19} aria-hidden="true" /></a></div>
        <dl className="skills-list">{skills.map((skill) => <div key={skill.name}><dt>{skill.name}</dt><dd>{skill.description}</dd></div>)}</dl>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="education-section page-width" aria-labelledby="education-heading">
      <div className="education-intro"><h2 id="education-heading">Formación continua.</h2><p>Formación técnica, desarrollo Full Stack y especialización en JavaScript.</p></div>
      <div className="education-list">{education.map((item) => <article key={item.title}><div><h3>{item.title}</h3><p>{item.focus} <span aria-hidden="true">·</span> {item.institution}</p></div><p className="education-date">{item.date}</p></article>)}</div>
      <div className="language-note"><span>También en inglés.</span><p>Nivel intermedio · B2</p></div>
    </section>
  );
}

export function ContactSection() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("jeffverdu@gmail.com");
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }
  return (
    <>
      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <div className="page-width contact-layout">
          <div><h2 id="contact-heading">¿Conversamos?</h2><p>Si mi experiencia encaja con tu equipo,<br className="desktop-break" /> me gustaría conocer el proyecto.</p></div>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:jeffverdu@gmail.com"><span>jeffverdu@gmail.com</span> <ArrowUpRight aria-hidden="true" /></a>
            <div className="contact-links"><a className="text-link" href="mailto:jeffverdu@gmail.com"><Mail size={19} aria-hidden="true" />Escribir correo</a><button className="copy-button" type="button" onClick={copyEmail}>{copyStatus === "copied" ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}{copyStatus === "copied" ? "Correo copiado" : "Copiar correo"}</button></div>
            <p className="copy-status" role="status">{copyStatus === "error" ? "No se pudo copiar. Puedes seleccionar el correo o usar «Escribir correo»." : copyStatus === "copied" ? "Listo, el correo está en tu portapapeles." : ""}</p>
          </div>
        </div>
      </section>
      <footer className="site-footer page-width"><a className="footer-name" href="#about">Jeffrey Verdú<span>Full Stack Developer · Santiago, Chile</span></a><div><a href="https://www.linkedin.com/in/jeffverdu" target="_blank" rel="noopener noreferrer"><Linkedin size={18} aria-hidden="true" />LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a><a href="/CV_Jeffrey_Verdu_Full_Stack_Developer_2026.pdf" download><Download size={18} aria-hidden="true" />Descargar CV</a></div></footer>
    </>
  );
}
