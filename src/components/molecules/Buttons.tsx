import React from 'react';
import Button from '../atoms/Button';

/* type buttonTypes = {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  fn: () => void;
} */

interface Props {
  args: any;
}

const Template = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});

// console.log(JSON.stringify(Primary, null, 2));
// console.log(Primary);

Primary.args = {
  fn: () => alert('AOPA'),
  type: "submit",
  text: "Botão",
};

// Primary.arguments = () => alert('AOPA');