
import { Inter } from '@next/font/google';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import Page1 from '../components/Page1';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <Page1/>
      <Gallery/>

      
      <div>
        <Footer/>
      </div>

    </>
  )
}
