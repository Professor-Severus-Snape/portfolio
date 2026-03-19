import './project.sass';

interface IProjectProps {
  id: number;
  src: string;
  title: string;
  deploy: string;
}

const Project = ({ src, title, deploy }: IProjectProps) => {
  return (
    <li className="project">
      <h3 className="project__title">{title}</h3>
      <img className="project__image" src={src} alt={title} />
      <a href={deploy} className="project__link" target="_blank" rel="noopener noreferrer">
        Открыть сайт
      </a>
    </li>
  );
};

export default Project;
