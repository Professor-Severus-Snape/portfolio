import './skill.sass';

interface ISkillProps {
  src: string;
  text: string;
}

const Skill = ({ src, text }: ISkillProps) => {
  return (
    <li className="skill">
      <img className="skill__icon" src={src} alt="devicon" />
      <span className="skill__text">{text}</span>
    </li>
  );
};

export default Skill;
