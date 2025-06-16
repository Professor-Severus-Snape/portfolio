import { useCallback } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { openMenu } from '@/redux/menuSlice';
import './burger.sass';

const Burger = () => {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(openMenu());
  }, [dispatch]);

  return (
    <div className="burger" onClick={handleClick}>
      <span className="burger__line burger__line_first"></span>
      <span className="burger__line burger__line_second"></span>
      <span className="burger__line burger__line_third"></span>
    </div>
  );
};

export default Burger;
