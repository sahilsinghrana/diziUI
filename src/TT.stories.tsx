import React from 'react';
import TT from './TT';

export default {
  title: 'Example/TT',
  component: TT,
};

const Template = (args) => <TT {...args}>Click Me</TT>;

export const Primary = Template.bind({});
Primary.args = {};
