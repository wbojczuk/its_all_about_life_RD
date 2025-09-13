import './globals.css'
import type { Metadata } from 'next'
import "react-multi-carousel/lib/styles.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Faustina, Open_Sans } from 'next/font/google'
import Footer from './(mainsite)/components/misc/Footer/Footer';
import Navbar from './(mainsite)/components/misc/Navbar/Navbar';
import Script from 'next/script';
import {GoogleTagManager} from "@next/third-parties/google"

// BUTTON STYLES - .main-button
import "./(mainsite)/components/styling_sheets/links/mainlink.css"


const primaryFont = Faustina({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "800"], display: "swap", variable: "--primary-font" })
const secondaryFont = Open_Sans({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "800"], display: "swap", variable: "--secondary-font" })

export const metadata: Metadata = {
  title: 'It\'s All About Life | Insurance Provider',
  description: 'It\'s All About Life Insurance | life insurance, mortgage insurance'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} ${secondaryFont.variable}`}>

        <GoogleTagManager gtmId={"GTM-5NRDRX3V"} />
        <Navbar />

        {children}

        <Footer />
        
        </body>
    </html>
  )
}
