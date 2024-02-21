import React, { FC } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'end' | 'center' | 'between';
export type FlexAlign = 'start' | 'end' | 'center';
export type FlexDirection = 'column' | 'row';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter,
};

const directioinClasses: Record<FlexDirection, string> = {
  column: cls.directionColumn,
  row: cls.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export interface FlexProps {
    className?: string;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex: FC<FlexProps> = (props) => {
  const {
    children,
    className,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directioinClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.max]: max,
  };

  return (
    <div className={classNames(cls.flex, mods, classes)}>
      {children}
    </div>
  );
};
