import localFont from 'next/font/local'

// Regular AP font family
const apFont = localFont({
  src: [
    {
      path: './../fonts/APCustomFont/APW05-Regular.woff2',
      weight: '400',
    },
    {
      path: './../fonts/APCustomFont/APW05-Medium.woff2',
      weight: '500',
    },
    {
      path: './../fonts/APCustomFont/APW05-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--ap-font',
})

// Condensed AP font family
const apCondensedFont = localFont({
  src: [
    {
      path: './../fonts/APCustomFont/APW05-Condensed.woff2',
      weight: '400',
    },
    {
      path: './../fonts/APCustomFont/APW05-CondensedMedium.woff2',
      weight: '500',
    },
    {
      path: './../fonts/APCustomFont/APW05-CondensedBold.woff2',
      weight: '700',
    },
  ],
  variable: '--ap-condensed-font',
})

// Semi-Condensed AP font family
const apSemiCondensedFont = localFont({
  src: [
    {
      path: './../fonts/APCustomFont/APW05-SemiCondensed.woff2',
      weight: '400',
    },
    {
      path: './../fonts/APCustomFont/APW05-SemiCondensedMedium.woff2',
      weight: '500',
    },
    {
      path: './../fonts/APCustomFont/APW05-SemiCondensedBold.woff2',
      weight: '700',
    },
  ],
  variable: '--ap-semi-condensed-font',
})

// Variable font
const apVarFont = localFont({
  src: [
    {
      path: './../fonts/APCustomFont/APVarW05-Regular.woff2',
      weight: '400',
    },
  ],
  variable: '--ap-var-font',
})

export { apFont, apCondensedFont, apSemiCondensedFont, apVarFont }
