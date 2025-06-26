import './certificatesButton.sass';

const CertificatesButton = () => {
  return (
    <a
      className="certificates-button"
      href="https://disk.yandex.ru/d/wJtFgtU7jPiKrg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="certificates-button__icon"></span>
      <span className="certificates-button__text">Смотреть сертификаты</span>
    </a>
  );
};

export default CertificatesButton;
