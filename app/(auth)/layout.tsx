import { ClerkProvider } from '@clerk/nextjs'

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
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}