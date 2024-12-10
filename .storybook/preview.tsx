import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Preview } from '@storybook/react'

import '../sass/globals.scss'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        '360px': {
          name: '360px',
          styles: {
            width: '360px',
            height: '100%',
          },
        },
        '768px': {
          name: '768px',
          styles: {
            width: '768px',
            height: '100%',
          },
        },
        '1024px': {
          name: '1024px',
          styles: {
            width: '1024px',
            height: '100%',
          },
        },
        '1920px': {
          name: '1920px',
          styles: {
            width: '1920px',
            height: '100%',
          },
        },
        ...INITIAL_VIEWPORTS,
      },
    },
  },
}

export default preview
