import './project.sass';

interface IProjectProps {
  src: string;
  title: string;
  code: string;
  deploy: string;
  date: string;
}

const Project = ({ src, title, code, deploy, date }: IProjectProps) => {
  return (
    <li className="project">
      <h3 className="project__title">{title}</h3>
      <img className="project__image" src={src} alt={title} />
      <div className="project__footer">
        <div className="project__btns">
          <a
            href={deploy}
            className="project__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть сайт
          </a>
          <a
            href={code}
            className="project__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Смотреть код
          </a>
        </div>
        <span className="project__date">{date}</span>
      </div>
    </li>
  );
};

export default Project;
