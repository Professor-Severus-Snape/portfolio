import Burger from '@/components/ui/Burger';
import Logo from '@/components/ui/Logo';
import Menu from '@/components/ui/Menu';
import './topBar.sass';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar__container">
        <Logo accentColor="black" />
        <Menu variant="header" />
        <Burger />
      </div>
    </div>
  );
};

export default TopBar;
