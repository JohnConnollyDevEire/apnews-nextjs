import type { Meta, StoryObj } from '@storybook/react'

import Footer from './footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Global/Footer',
  component: Footer,
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof Footer> = {}
