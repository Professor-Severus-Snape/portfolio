import { useMediaQuery } from 'react-responsive';

const useTopBarHeight = () => {
  // Вариант без useMediaQuery():
  // const isDesktop = window.matchMedia('(min-width: 1400px)').matches;
  // const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1399px)').matches;

  // Вариант с useMediaQuery():
  const isDesktop = useMediaQuery({ minWidth: 1400 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1399 });

  if (isDesktop) return 65;
  if (isTablet) return 60;
  return 75;
};

export default useTopBarHeight;
