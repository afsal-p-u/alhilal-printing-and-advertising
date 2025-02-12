import React from 'react'
import { AboutUs, ContactUs, Footer, Home, Location, MoreInfo, Services, Works } from './pages'

const App = () => {
  return (
    <>
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
