import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meet CC50',
  description: 'Este é um projeto Open Source desenvolvido pelos monitores do curso CC50 de Havard no Brasil. Com foco em criar uma plataforma de conexão entre os monitores e alunos do curso e facilitar o contato entre os mesmos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="PT-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
