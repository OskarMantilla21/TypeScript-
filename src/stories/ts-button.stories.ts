import type { Meta, StoryObj } from '@storybook/react';
import { TsButton } from '../quiz-ts-1';

const meta = {
    title: 'TS/TsButton',
    component: TsButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        count: 100
    },
};