 
import AboutSection from '@/components/AboutSection'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Gallery from '@/components/Galleries'
import Home from '@/components/Home'
import Informations from '@/components/Informations'
 
import Services from '@/components/Services'
 
import TarifsSection from '@/components/TarifsSection'
import React from 'react'

export default function page() {
  return (
  <>
    <Home/>
 
    <Informations/>
    <TarifsSection/>
    <Gallery/>
    <Services/>
  
    <Faq/>
    <Contact/>
    <AboutSection/>
    <Footer/>
  
    
  </>
  )
}
