
import { Inter } from '@next/font/google';
import About_us from '../components/About_us';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <About_us />
      <div>
        <Footer />
      </div>

    </>
  )
}