import React from 'react';

import Button from './Button';

export default {
  title: 'ui-kit/Button',
  component: Button,
};

export const Default = () => <Button>Button</Button>;

export const Sizes = () => <Button size="s">Button</Button>;

export const Colors = () => <Button variant="secondary">Button</Button>;

export const Variants = () => <Button variant="outlined">Button</Button>;

export const Loading = () => <Button status="LOADING">Button</Button>;
