import type { Meta, StoryObj } from '@storybook/react';

import { TsUserProfile } from '../quiz-ts-1';

const meta = {
    title: 'TS/TsUserProfile',
    component: TsUserProfile,
    tags: ['autodocs'],
} satisfies Meta<typeof TsUserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name: 'Juana Rondon',
        age: 21,
        hobbies: ['Peliculas', 'Comer', 'Escuchar musica']
    },
};





