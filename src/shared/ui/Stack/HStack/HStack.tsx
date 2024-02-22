import React, { FC } from 'react';
import { Flex, IFlexProps } from '../../Stack/Flex/Flex';

type HStackProps = Omit<IFlexProps, 'direction'>

export const HStack: FC<HStackProps> = (props) => {
  return (
    <Flex direction="row" {...props} />
  );
};
