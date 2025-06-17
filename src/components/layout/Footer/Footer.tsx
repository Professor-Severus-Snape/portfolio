import Line from '@/components/ui/Line';
import Logo from '@/components/ui/Logo';
import Menu from '@/components/ui/Menu';
import Socials from '@/components/ui/Socials';
import Year from '@/components/ui/Year';
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
