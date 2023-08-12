'use client'

import './globals.css'
import React from 'react'
import { ModalProvider } from '@/contexts/ModalContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  )
}
