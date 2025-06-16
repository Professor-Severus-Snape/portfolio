import { useCallback } from 'react';
import logo from '../../assets/logo.svg';
import './logo.sass';

const Logo = () => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    // убираем перезагрузку страницы:
    e.preventDefault();

    // добавляем плавную прокрутку в начало страницы:
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    // import.meta.env.BASE_URL - роут будет взят из конфига Vite (не используем React Router)
    <a href={import.meta.env.BASE_URL} className="logo" onClick={handleClick}>
      <img className="logo__img" src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
