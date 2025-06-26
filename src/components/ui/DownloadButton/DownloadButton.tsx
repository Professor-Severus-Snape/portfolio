import './downloadButton.sass';

const DownloadButton = () => {
  return (
    <a
      className="download-button"
      href={`${import.meta.env.BASE_URL}/files/CV.pdf`}
      download
    >
      <span className='download-button__icon'></span>
      <span className='download-button__text'>Скачать резюме</span>
    </a>
  );
};

export default DownloadButton;
