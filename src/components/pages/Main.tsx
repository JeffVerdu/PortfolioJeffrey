import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, AppWindow, Database, GraduationCap, MapPin, Menu, Settings2, X } from "lucide-react";
import { ContactSection, EducationSection, ExperienceDetails, KnowledgeSection, ProjectsSection } from "../layout/PortfolioSections";

const cv = "/CV_Jeffrey_Verdu_Full_Stack_Developer_2026.pdf";
const layers = [
  { id: "interfaz", label: "Interfaz", title: "React y JavaScript", description: "Interfaces responsivas, búsqueda y filtros para encontrar lo que necesitas.", steps: ["Componentes de React", "Búsqueda y filtros", "Autenticación con Firebase"], evidence: "PosicionAR!", date: "Jun — Jul 2024", href: "#projects" },
  { id: "backend", label: "Backend", title: "Ruby on Rails", description: "Lógica de negocio, modelos y controladores en una plataforma en producción.", steps: ["Vistas y flujos", "Reglas de negocio", "PostgreSQL"], evidence: "Academia Desafío Latam", date: "Ago 2024 — Actualidad", href: "#resume" },
  { id: "datos", label: "Datos", title: "PostgreSQL y SQL", description: "Validación de datos y diagnóstico de incidencias a partir de logs y bases de datos.", steps: ["Análisis de logs", "Validación de datos", "Procesos con Sidekiq"], evidence: "Academia Desafío Latam", date: "Ago 2024 — Actualidad", href: "#resume" },
];
const flowIcons = [AppWindow, Settings2, Database];

function LayerExplorer() {
  const [selected, setSelected] = useState(1);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const layer = layers[selected];
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % layers.length;
    else if (event.key === "ArrowLeft") next = (index + layers.length - 1) % layers.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = layers.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }
  return (
    <section className="layer-explorer" aria-labelledby="layers-heading">
      <h2 id="layers-heading">Un perfil, distintas capas.</h2>
      <div className="layer-tabs" role="tablist" aria-label="Áreas de desarrollo">
        {layers.map((item, index) => (
          <button key={item.id} ref={(node) => { tabs.current[index] = node; }} type="button" role="tab" id={`tab-${item.id}`} aria-selected={selected === index} aria-controls={`panel-${item.id}`} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={(event) => onKeyDown(event, index)}>{item.label}</button>
        ))}
      </div>
      {layers.map((item, index) => (
        <div key={item.id} id={`panel-${item.id}`} role="tabpanel" aria-labelledby={`tab-${item.id}`} hidden={selected !== index} tabIndex={0} className="layer-content">
          <h3>{item.title}</h3>
          <p className="layer-description">{item.description}</p>
          <ol className="layer-flow">
            {item.steps.map((step, stepIndex) => {
              const Icon = flowIcons[stepIndex];
              return <li key={step}><span className="flow-icon"><Icon size={32} strokeWidth={1.7} aria-hidden="true" /></span><span>{step}</span></li>;
            })}
          </ol>
        </div>
      ))}
      <a className="layer-evidence" href={layer.href}>
        <span><GraduationCap size={28} strokeWidth={1.7} aria-hidden="true" />{layer.evidence}</span>
        <span className="layer-date">{layer.date}</span>
      </a>
    </section>
  );
}

export const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); } }}>
        <div className="page-width header-inner">
          <a className="wordmark" href="#about" aria-label="Jeffrey Verdú, inicio">Jeffrey Verdú</a>
          <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
          <nav id="main-navigation" aria-label="Navegación principal" className={menuOpen ? "navigation is-open" : "navigation"} onClick={() => setMenuOpen(false)}>
            <a href="#resume">Experiencia</a><a href="#projects">Proyectos</a><a href="#skills">Conocimientos</a><a className="button button-outline nav-contact" href="#contact">Contactar</a>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero page-width" id="about" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <h1 id="hero-heading">Del backend<br />a la interfaz.</h1>
            <p className="hero-intro">Soy Jeffrey, desarrollador Full Stack.</p>
            <p className="hero-summary">Trabajo con Ruby on Rails, React y bases de datos para construir y mantener aplicaciones web.</p>
            <div className="hero-actions"><a className="button button-primary" href="#resume">Ver experiencia</a><a className="text-link" href={cv} download>Descargar CV <ArrowRight size={21} aria-hidden="true" /></a></div>
            <div className="hero-meta"><span><MapPin size={20} aria-hidden="true" />Santiago, Chile</span><span>Rails · React · TypeScript · Docker</span></div>
          </div>
          <LayerExplorer />
        </section>
        <section id="resume" className="experience-section" aria-labelledby="experience-heading">
          <div className="page-width section-heading"><h2 id="experience-heading">Experiencia que conecta.</h2><p>Desarrollo y gestión,<br />en el mismo equipo.</p></div>
          <ExperienceDetails />
        </section>
        <ProjectsSection />
        <KnowledgeSection />
        <EducationSection />
      </main>
      <ContactSection />
    </>
  );
};
