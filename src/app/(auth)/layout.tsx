import Footer from '@components/components/Footer/Footer'
import '@css/globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="mx-auto flex h-screen flex-col px-4 xl:container">
        <header className="my-6 flex justify-center">
          <img
            src="https://images.placeholders.dev/?width=250&height=75&text=logo"
            alt=""
          />
        </header>
        <div className="mb-auto">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
