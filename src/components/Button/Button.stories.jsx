import React from 'react';

import { Button } from './Button';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

// Adding Args
Primary.args = {
  primary: true,
  label: 'Comprarlo'
};

// export const Secondary = Template.bind({})

// Secondary.args = {
//   label: 'LongCharacterText',
// 	size: "small"
// };