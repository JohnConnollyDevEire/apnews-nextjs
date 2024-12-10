import type { Meta, StoryObj } from '@storybook/react'

import { PageProvider } from '@/providers/page-provider'

import Header from './header'

const meta: Meta<typeof Header> = {
  title: 'Components/Global/Header',
  component: Header,
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof Header> = {
  decorators: [
    (Story) => (
      <PageProvider>
        <Story />
      </PageProvider>
    ),
  ],
}
