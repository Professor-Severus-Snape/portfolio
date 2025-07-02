import Skill from '@/components/ui/Skill';
import TitleH2 from '@/components/ui/TitleH2';
import skillsList from '@/data/skills';
import './skills.sass';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <TitleH2 text="Навыки" />
        <ul className="skills__list">
          {skillsList.map(({ id, src, text }) => (
            <Skill key={id} src={src} text={text} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
