import './globals.css'

export const metadata = {
  title: 'Quadro de Avisos - Horários',
  description: 'Quadro de avisos com horários de transporte',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}