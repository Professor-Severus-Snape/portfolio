import { useCallback } from 'react';
import logoWhite from '@/assets/svg/logo-white.svg';
import logoBlack from '@/assets/svg/logo-black.svg';
import './logo.sass';

interface ILogoProps {
  accentColor: 'white' | 'black';
}

const Logo = ({ accentColor }: ILogoProps) => {
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
      <img
        className="logo__img"
        src={accentColor === 'white' ? logoWhite : logoBlack}
        alt="logo"
      />
    </a>
  );
};

export default Logo;
