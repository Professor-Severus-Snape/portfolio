import './githubButton.sass';

const GithubButton = () => {
  return (
    <a
      className="github-button"
      href="https://github.com/Professor-Severus-Snape?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="github-button__icon"></span>
      <span className="github-button__text">Ещё больше моих работ здесь</span>
    </a>
  );
};

export default GithubButton;
