import { useCallback, useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import useTopBarHeight from '@/hooks/useTopBarHeight';
import useScrollActiveSection from '@/hooks/useScrollActiveSection';
import {
  closeMenu,
  selectCurrentItemIndex,
  selectIsOpen,
  setCurrentItemIndex,
} from '@/redux/menuSlice';
import menuItems from '@/data/menu.json';
import './menu.sass';

interface IMenuProps {
  variant: 'header' | 'footer';
}

const Menu = ({ variant }: IMenuProps) => {
  const notMobile = useMediaQuery({ minWidth: 768 }); // отслеживаем переход через брейкпоинт 768px

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsOpen);
  const currentItemIndex = useAppSelector(selectCurrentItemIndex);

  const topBarHeight = useTopBarHeight(); // получаем высоту топбара в зависимости от вьюпорта

  const anchors = useMemo(() => menuItems.map((item) => item.anchor), []);

  const isHeader = variant === 'header';

  // закрытие меню по клику на крестик:
  const handleClose = useCallback(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  // обработка клика по пункту меню:
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
      event.preventDefault(); // предотвращаем перезагрузку страницы

      // если кликнули по неактивному пункту меню, то делаем его активным:
      if (currentItemIndex !== index) {
        dispatch(setCurrentItemIndex(index));
      }

      // закрываем меню, если оно было открыто:
      if (isOpen) {
        dispatch(closeMenu());
      }

      // находим элемент, к которому необходимо выполнить скролл:
      const id = menuItems[index].anchor;
      const element = document.getElementById(id);
      if (!element) return;

      // абсолютная позиция нужного элемента относительно всей страницы:
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      // место, к которому скроллим, с учётом высоты топбара + 1px для надёжности:
      const scrollToPosition = elementPosition - topBarHeight + 1;

      // плавно скроллим:
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    },
    [currentItemIndex, dispatch, isOpen, topBarHeight]
  );

  // отслеживание прокрутки страницы (событие 'scroll' на window) через кастомный хук:
  useScrollActiveSection(anchors);

  // закрытие мобильного меню (если оно было открыто) при ширине экрана >= 768px
  useEffect(() => {
    if (isOpen && notMobile) {
      dispatch(closeMenu());
    }
  }, [isOpen, notMobile, dispatch]);

  return (
    <nav
      className={classNames('menu', {
        menu_mobile: isOpen && isHeader,
      })}
    >
      <ul className="menu__list">
        {menuItems.map(({ text, anchor }, idx) => (
          <li
            key={anchor}
            className={classNames('menu__item', {
              menu__item_active: currentItemIndex === idx && isHeader,
            })}
          >
            <a
              className="menu__link"
              href={`#${anchor}`}
              onClick={(e) => handleClick(e, idx)}
            >
              {text}
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
