import './project.sass';

interface IProjectProps {
  id: number;
  src: string;
  title: string;
  stack: string;
  deploy: string;
}

const Project = ({ src, title, stack, deploy }: IProjectProps) => {
  return (
    <li className="project">
      <h3 className="project__title">{title}</h3>
      <img className="project__image" src={src} alt={title} />
      <div className="project__stack stack">
        <span className="stack__label">Стек: </span>
        <span className="stack__text">{stack}</span>
      </div>
      <a href={deploy} className="project__link" target="_blank" rel="noopener noreferrer">
        Открыть сайт
      </a>
    </li>
  );
};

export default Project;
