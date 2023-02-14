
import { Inter } from '@next/font/google';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <Contact />
      <div>
        <Footer />
      </div>

    </>
  )
}