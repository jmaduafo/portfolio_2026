import localFont from 'next/font/local'

export const sans = localFont({
  src: "../public/fonts/ppneuemontreal-book.otf",
  variable: '--font-sans',
  display: 'swap'
})

export const sansMedium = localFont({
  src: "../public/fonts/ppneuemontreal-medium.otf",
  variable: '--font-sans-medium',
  display: 'swap'
})

export const sansBold = localFont({
  src: "../public/fonts/ppneuemontreal-bold.otf",
  variable: '--font-sans-bold',
  display: 'swap'
})

export const sansItalic = localFont({
  src: "../public/fonts/ppneuemontreal-italic.otf",
  variable: '--font-sans-italic',
  display: 'swap'
})

export const sansSemiboldItalic = localFont({
  src: "../public/fonts/ppneuemontreal-semibolditalic.otf",
  variable: '--font-sans-semibolditalic',
  display: 'swap'
})

