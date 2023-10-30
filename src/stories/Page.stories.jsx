import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';

const widthMaxWidth = (StoryFn) => {
  return (
    <div 
      style={{
        maxWidth: 400,
        margin: 'auto',
        border: '1px solid #fab'
      }}
    >
      <StoryFn />
    </div>
  )
};

export default {
  title: 'Pages/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Template = (args) => <Page {...args} />;