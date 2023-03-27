import Footer from '@components/components/Footer/Footer'
import Header from '@components/components/Header/Header'
import '@css/globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="mx-auto flex h-screen flex-col px-4 xl:container">
        <div className="mb-auto">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
