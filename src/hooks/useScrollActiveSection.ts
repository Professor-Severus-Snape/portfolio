import { useEffect, useRef } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setCurrentItemIndex } from '@/redux/menuSlice';
import useTopBarHeight from '@/hooks/useTopBarHeight';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectCurrentItemIndex } from '@/redux/menuSlice';

const useScrollActiveSection = (anchors: string[]) => {
  const dispatch = useAppDispatch();
  const topBarHeight = useTopBarHeight();

  const currentItemIndex = useAppSelector(selectCurrentItemIndex);

  // храним последний индекс в ref, чтобы обработчик всегда видел актуальное значение,
  // но не вызывал пересоздания эффекта:
  const indexRef = useRef(currentItemIndex);

  useEffect(() => {
    indexRef.current = currentItemIndex;
  }, [currentItemIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const lastIndex = anchors.length - 1;

      if (documentHeight - scrollBottom < 50) {
        if (indexRef.current !== lastIndex) {
          indexRef.current = lastIndex;
          dispatch(setCurrentItemIndex(lastIndex));
        }
        return;
      }

      const lastItemIndexInView = anchors.findLastIndex((anchor) => {
        const el = document.getElementById(anchor);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= topBarHeight + 1;
      });

      const newItemIndex = lastItemIndexInView === -1 ? 0 : lastItemIndexInView;

      if (indexRef.current !== newItemIndex) {
        indexRef.current = newItemIndex;
        dispatch(setCurrentItemIndex(newItemIndex));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [anchors, dispatch, topBarHeight]);
};

export default useScrollActiveSection;
