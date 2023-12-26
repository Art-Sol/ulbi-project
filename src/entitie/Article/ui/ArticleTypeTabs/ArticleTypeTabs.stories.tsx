import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleType } from 'entitie/Article';
import { action } from '@storybook/addon-actions';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: ArticleType.ALL,
  onChangeType: action('onChangeType'),
};
