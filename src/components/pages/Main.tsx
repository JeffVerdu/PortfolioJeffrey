import { useEffect, useRef, useState } from "react";
import { TopBar } from "../layout/TopBar";
import { About } from "../layout/About";
import { Education } from "../layout/Education";
import { Resume } from "../layout/Resume";
import { ProjectsList } from "../layout/ProjectsList";

export const Main = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDivVisible, setIsDivVisible] = useState(true);
  const [isTopBarVisible, setIsTopBarVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTopBarVisible(true);
    }, 1);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === "about") {
          setIsDivVisible(false);
        } else {
          setIsDivVisible(true);
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="md:ml-[25%] w-full md:w-[75%]">
      {isTopBarVisible && (
        <div
          className={`z-[9999] fixed top-0 w-full md:w-[75%] transform duration-300 ease-in-out ${
            isDivVisible ? "translate-y-[0%]" : "translate-y-[-100%]"
          }`}
        >
          <TopBar />
        </div>
      )}
      <main className="text-white">
        <section ref={sectionRef} id="about" className="container-box">
          <About isVisible={isDivVisible} />
        </section>
        <section id="education" className="mt-20 pt-16">
          <h1 className="text-center text-2xl mt-5 mb-10">Formación</h1>
          <Education />
        </section>
        <section id="projects" className="pt-16 container-box">
          <h1 className="text-center text-2xl mt-5 mb-10">Proyectos</h1>
          <ProjectsList />
        </section>
        <section id="resume" className="pt-16 pb-10 container-box">
          <h1 className="text-center text-2xl mt-5 mb-10">
            Experiencia Laboral
          </h1>
          <Resume />
        </section>
      </main>
    </div>
  );
};
