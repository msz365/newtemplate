'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'

const Themeproviders = ({children}) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
    </ThemeProvider>
  )
}

export default Themeproviders