import Burger from '../Burger';
import Logo from '../Logo';
import Menu from '../Menu';
import './topContainer.sass';

const TopContainer = () => {
  return (
    <div className="top-container">
      <Logo />
      <Menu />
      <Burger />
    </div>
  );
};

export default TopContainer;
