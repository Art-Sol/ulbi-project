import { type FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../models/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../models/slice/counterSlice';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <Button
        data-testid="increment-btn"
        onClick={increment}
      >
        {t('Увеличить')}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={decrement}
      >
        {t('Уменьшить')}
      </Button>
    </div>
  );
};
