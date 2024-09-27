import type { Meta, StoryObj } from '@storybook/react';

import { TsTuple } from '../quiz-ts-1';

const meta = {
    title: 'TS/TsTuple',
    component: TsTuple,
} satisfies Meta<typeof TsTuple>;

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
    }
}