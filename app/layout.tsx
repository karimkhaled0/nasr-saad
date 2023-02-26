import '@/styles/globals.css'
import "mapbox-gl/dist/mapbox-gl.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
