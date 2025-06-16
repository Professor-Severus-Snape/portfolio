import { useCallback, useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import {
  closeMenu,
  selectCurrentItemIndex,
  selectIsOpen,
  setCurrentItemIndex,
} from '@/redux/menuSlice';
import './menu.sass';

interface IMenuProps {
  variant: 'header' | 'footer';
}

const Menu = ({ variant }: IMenuProps) => {
  const notMobile = useMediaQuery({ minWidth: 768 }); // отслеживаем переход через брейкпоинт 768px

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsOpen);
  const currentItemIndex = useAppSelector(selectCurrentItemIndex);

  useEffect(() => {
    if (isOpen && notMobile) {
      // закрываем мобильное меню (если оно было открыто) при ширине экрана >= 768px
      dispatch(closeMenu());
    }
  }, [isOpen, notMobile, dispatch]);

  const isHeader = useMemo(() => variant === 'header', [variant]);

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

  const handleClick = useCallback(
    (index: number) => {
      if (currentItemIndex !== index) {
        dispatch(setCurrentItemIndex(index));
      }

      if (isOpen) {
        dispatch(closeMenu());
      }
    },
    [currentItemIndex, isOpen, dispatch]
  );

  const handleClose = useCallback(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <nav
      className={classNames('menu', {
        menu_mobile: isOpen && isHeader,
      })}
    >
      <ul className="menu__list">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className={classNames('menu__item', {
              menu__item_active: currentItemIndex === idx && isHeader,
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

      {isOpen && isHeader && (
        <button className="menu__close" onClick={handleClose}></button>
      )}
    </nav>
  );
};

export default Menu;
