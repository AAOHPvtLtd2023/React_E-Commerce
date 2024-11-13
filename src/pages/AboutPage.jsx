import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Established in the year of 2015, we “Bajarangi Industries” are the
          Manufacturer and Importer of an extensive array of Aluminium Foil Paper
          Plate Making Machine, Manual Paper Plate Making Machine, Fully
          Automatic Paper Plate Making Machine, Triple Die Paper Plate Making
          Machine, Fully Automatic Non Woven Carry Bag Making Machine,
          Disposable Paper Cup Making Machine, Agarbatti Making Machine etc.
          We direct all our activities to cater the expectations of customers by
          providing them excellent quality products as per their gratifications.
          Moreover, we follow moral business policies and crystal pure transparency in
          all our transactions to keep healthy relations with the customers.
        </p>

      
      </div>
      <Footer />
    </>
  )
}

export default AboutPage