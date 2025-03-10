import React from 'react'
import { AboutUs, ContactUs, Footer, Home, Location, Services, Clients, Gallery } from './pages'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Gallery />
      <AboutUs />
      <ContactUs />
      <Clients />
      {/* <MoreInfo /> */}
      <Location />
      <Footer />
    </>
  )
}

export default App
