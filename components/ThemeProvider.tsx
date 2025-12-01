// https://ui.shadcn.com/docs/dark-mode/next
// https://github.com/pacocoursey/next-themes
'use client'

import {ComponentProps} from 'react'
import {ThemeProvider as NextThemesProvider} from 'next-themes'

export const ThemeProvider = ({children, ...props}: ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
