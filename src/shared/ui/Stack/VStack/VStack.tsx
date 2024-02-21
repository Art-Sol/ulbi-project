import React, { FC } from 'react';
import { Flex, FlexProps } from '../../Stack/Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack: FC<VStackProps> = (props) => {
  const { align = 'start' } = props;
  return (
    <Flex {...props} direction="column" align={align} />
  );
};
