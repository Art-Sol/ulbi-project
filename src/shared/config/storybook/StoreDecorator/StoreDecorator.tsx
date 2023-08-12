import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = () => (StoryComponent: Story) => (
  <StoreProvider>
    <StoryComponent />
  </StoreProvider>
);
