import { type FC, useEffect, useState } from 'react';

import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string
}

/**
 * Компонент для тестрирования
 */
export const BugButton: FC<BugButtonProps> = ({ className }) => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  const onError = () => setError(true);

  return (
    <Button onClick={onError}>
      {t('Имитировать ошибку')}
    </Button>
  );
};
