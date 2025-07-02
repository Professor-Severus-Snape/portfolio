import Avatar from '@/components/ui/Avatar';
import CertificatesButton from '@/components/ui/CertificatesButton';
import DownloadButton from '@/components/ui/DownloadButton';
import TitleH1 from '@/components/ui/TitleH1';
import './header.sass';

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="header__container">
        <div className="header__left-wrapper">
          <TitleH1 />
          <div className="header__text">
            Мне нравится создавать красивые сайты и веб-приложения. Воплощу в
            жизнь самые смелые задумки дизайнера.
          </div>
          <div className="header__btns">
            <DownloadButton />
            <CertificatesButton />
          </div>
        </div>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
