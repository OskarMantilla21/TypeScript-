import type { Meta, StoryObj } from '@storybook/react';
import { TsInput } from '../quiz-ts-1';

const meta = {
    title: 'TS/TsInput',
    component: TsInput
} satisfies Meta<typeof TsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const String: Story = {
    args: {
        value: 'Celular'
    }
}

export const Number: Story = {
    args: {
        value: 1254932465
    }
}

export const Person: Story = {
    args: {
        value: {
            name: 'Juana',
            age: 21
        }
    }
}