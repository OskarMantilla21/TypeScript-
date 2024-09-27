import type { Meta, StoryObj } from '@storybook/react';

import { TsReadonly } from '../quiz-ts-1';

const meta = {
    title: 'TS/TsReadonly',
    component: TsReadonly
} satisfies Meta<typeof TsReadonly>;

export default meta;
type Story = StoryObj<typeof meta>;

export const String: Story = {
    args: {
        items: ['Apple', 'Banana', 'Cherry']
    }
}