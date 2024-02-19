import type { Meta, StoryObj } from '@storybook/react';
import { TsCounter } from '../quiz-ts-1';


const meta = {
    title: 'TS/TsCounter',
    component: TsCounter
} satisfies Meta<typeof TsCounter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    }
}