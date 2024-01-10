import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "SketchFlow - An online whiteboard",
  description:
    "An online whiteboard app is a digital space mimicking a physical whiteboard, enabling real-time drawing and collaboration for visual brainstorming and idea-sharing, accessible via a web browser or app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
