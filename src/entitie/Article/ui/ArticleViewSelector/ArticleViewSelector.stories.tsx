import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleView } from 'entitie/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
  title: 'entities/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  view: ArticleView.TILE,
};
