import TitleH2 from '@/components/ui/TitleH2';
import data from '@/data/about.json';
import './about.sass';

const About = () => {
  return (
    <section id="about" className="about">
      <TitleH2 text="Обо мне" />
      <div className="about__content">
        {data.map((text, idx) => (
          <p key={idx} className="about__text">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
