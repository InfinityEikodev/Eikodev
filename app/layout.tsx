import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({weight: ['400','700','500','300'], style: 'normal', subsets: ['latin']})

export const metadata = {
  title: 'Eiko',
  description: 'Eiko dev site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} flex flex-col bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
