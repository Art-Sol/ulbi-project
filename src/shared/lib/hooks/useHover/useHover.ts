import { useCallback, useMemo, useState } from 'react';

interface IUseMouseBind {
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}

type TUseHoverResult = [boolean, IUseMouseBind];

export const useHover = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo<TUseHoverResult>(() => [
    isHover,
    {
      handleMouseEnter,
      handleMouseLeave,
    },
  ], [isHover, handleMouseEnter, handleMouseLeave]);
};
