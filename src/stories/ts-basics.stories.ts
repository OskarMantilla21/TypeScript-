import type { Meta, StoryObj } from '@storybook/react';
import { TsBasics } from '../quiz-ts-1';

const meta = {
    title: 'TS/TsBasics',
    component: TsBasics,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TsBasics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        basics: ['item1','item2', 'item3', 'item4'],
    },
};