import type { Metadata } from 'next'
import { roboto,edu} from './fonts'
import './globals.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Gallery from './components/Gallery'



export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${roboto.variable,edu.variable}`}>

      <body className='flex flex-col min-h-screen bg-ethereal bg-fixed'>

        <header >
         <NavBar/>
        </header>
       
 
        
        
       
        <div className="grow">
<main >{children}</main>
</div>
   

        
  <Footer/>
         

      </body>

    </html>
  )
}
