import React from 'react'
import { AboutUs, ContactUs, Footer, Home, Location, MoreInfo, Services, Clients, Works } from './pages'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Works />
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
