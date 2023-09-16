import '../globals.css'
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/shared/Topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cracker',
  description : 'A concert tracker for your favorite artists.'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-black">
          <Topbar/>
          {children}   

        </body>
      </html>
    </ClerkProvider>
  )
}
