import { memo, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';

import { Button, ButtonTheme } from '../Button/Button';

import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <div className={cls.codeWrapper}>
      <pre className={classNames(cls.code, {}, [className])}>
        <Button
          onClick={handleCopy}
          className={cls.copyBtn}
          theme={ButtonTheme.CLEAR}
        >
          <CopyIcon className={cls.copyIcon} />
        </Button>
        <code>
          {text}
        </code>
      </pre>
    </div>
  );
});
