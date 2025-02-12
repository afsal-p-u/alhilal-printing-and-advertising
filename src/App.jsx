import React from 'react'
import { AboutUs, ContactUs, Footer, Home, Location, MoreInfo, Services, Works } from './pages'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Works />
      <ContactUs />
      {/* <MoreInfo /> */}
      <Location />
      <Footer />
    </>
  )
}

export default App
