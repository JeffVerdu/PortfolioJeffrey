import { useEffect, useState } from "react";
import { Project as ProjectType } from "../../types";
import Slider from "react-slick";
import { Project } from "../core/Project";

export const ProjectsList = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          url={project.url}
          github={project.github}
          path={project.path}
        />
      ))}
    </Slider>
  );
};
