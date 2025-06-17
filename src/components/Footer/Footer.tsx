import Line from '../Line';
import Logo from '../Logo';
import Menu from '../Menu';
import Socials from '../Socials';
import Year from '../Year';
import './footer.sass';

const Footer = () => {
  return (
    <footer id="contacts" className="footer">
      <div className="footer__container">
        <Logo accentColor="white" />
        <Menu variant="footer" />
        <Socials />
        <Line />
        <Year />
      </div>
    </footer>
  );
};

export default Footer;
