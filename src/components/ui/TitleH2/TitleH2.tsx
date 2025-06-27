import './titleH2.sass';

interface ITitleH2Props {
  text: string;
}

const TitleH2 = ({ text }: ITitleH2Props) => {
  return <h2 className="title-h2">{text}</h2>;
};

export default TitleH2;
