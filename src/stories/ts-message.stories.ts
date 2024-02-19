import type { Meta, StoryObj } from '@storybook/react';
import { TsMessage } from '../quiz-ts-1';

const meta = {
    title: 'TS/TsMessage',
    component: TsMessage,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TsMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        message: 'Bienvenidos'
    },
};