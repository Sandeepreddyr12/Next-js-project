import './globals.css'
import StoreProvider from './store/store'
import Navbar from './navbar/navbar'
import Footer from './navbar/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <StoreProvider>
        <header><Navbar/></header>
        {children}
        <Footer/>
        </StoreProvider>
        </body>
    </html>
  )
}
