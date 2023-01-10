
import { Inter } from '@next/font/google';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <Gallery />
      <div>
        <Footer />
      </div>

    </>
  )
}
