import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import { TsList } from '../quiz-ts-1';


const meta = {
    title: 'TS/TsList',
    component: TsList,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const list = ['oskar', 'jc']

export const Primary: Story = {
    args: {
        items: list,
        renderItem: (item: unknown) => {
            const content = typeof item === 'string' ? item : 'Invalid type';
            return <span>{content}</span>
        }
    },
};