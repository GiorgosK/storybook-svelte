import { action } from '@storybook/addon-actions';

import Button from './Button.svelte';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => ({
  Component: Button,
  props: { text: 'Hello Button' },
  on: { click: action('clicked') },
});

export const Emoji = () => ({
  Component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
  on: { click: action('clicked') },
});

export const Other_Button = () => ({
  Component: Button,
  props: {
    text: 'Other',
  },
  on: { click: action('clicked') },
});
