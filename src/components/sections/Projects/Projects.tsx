import GithubButton from '@/components/ui/GithubButton';
import Project from '@/components/ui/Project';
import TitleH2 from '@/components/ui/TitleH2';
import projectsList from '@/data/projects';
import './projects.sass';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <TitleH2 text="Мои работы" />
      <ul className="projects__list">
        {projectsList.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </ul>
      <GithubButton />
    </section>
  );
};

export default Projects;
