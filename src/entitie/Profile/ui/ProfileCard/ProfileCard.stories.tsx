import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Country } from 'entitie/Country';
import { Currency } from 'entitie/Currency';
import avatar from 'shared/assets/forTest/avatarExample.jpg';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'test',
    age: 22,
    country: Country.Russia,
    lastname: 'Pupkin',
    first: 'Vasya',
    city: 'Moscow',
    currency: Currency.RUB,
    avatar,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
