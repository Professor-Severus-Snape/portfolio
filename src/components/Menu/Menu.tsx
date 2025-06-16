import { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import './menu.sass';

const Menu = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const menuItems = useMemo(
    () => [
      { text: 'главная', href: 'home' },
      { text: 'обо мне', href: 'about' },
      { text: 'навыки', href: 'skills' },
      { text: 'мои работы', href: 'projects' },
      { text: 'контакты', href: 'contacts' },
    ],
    []
  );

  const handleClick = useCallback((index: number) => {
    setCurrentItem(index);
  }, []);

  return (
    <ul className="menu">
      {menuItems.map((item, idx) => (
        <li
          key={idx}
          className={classNames('menu__item', {
            menu__item_active: currentItem === idx,
          })}
          onClick={() => handleClick(idx)}
        >
          {/* FIXME: временная заглушка в href: */}
          <a className="menu__link" href="#0">
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
