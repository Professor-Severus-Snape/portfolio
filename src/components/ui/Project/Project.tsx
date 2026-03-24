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
        Открыть
        <span className="project__icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 19L19 5M19 5H9M19 5V15" />
          </svg>
        </span>
      </a>
    </li>
  );
};

export default Project;
