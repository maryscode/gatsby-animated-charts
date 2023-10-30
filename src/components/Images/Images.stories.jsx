import React from 'react';
import { Images } from './Images';

export default {
  title: 'Components/Images',
  component: Images,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Images {...args} />;

export const Default = Template.bind({});