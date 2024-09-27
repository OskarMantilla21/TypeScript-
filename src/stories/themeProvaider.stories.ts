import type { Meta, StoryObj } from '@storybook/react';
import {ThemeProvider} from '../quiz-ts-1';


const meta = {
  title: 'Example/themeprovider',
  component: ThemeProvider,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },

} satisfies Meta<typeof ThemeProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: 'dark',
    children: 'dark'
  },
};