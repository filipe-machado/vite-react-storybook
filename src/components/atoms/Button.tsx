import React from 'react';

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  fn: () => void;
}

function Button(args: Props) {
  return (
    <button type={args.type} onClick={args.fn}>{args.text}</button>
  );
};

export default Button;
