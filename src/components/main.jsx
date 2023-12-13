import React from "react";
import DemoCarousel from "./slider";
import Smalladv from "./advertisment";
import Bestproduct from "./BestProduct.js";


const Home = () => {
  return (
    <>
      <DemoCarousel />
      <Smalladv />
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration:'underline', fontSize:'2em',fontStyle:'oblique', fontWeight:'600' }}>Our Company</h2>
      <div style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}>
        <p style={{ display: 'flex', fontSize: '1.6em', textAlign:'justify', padding:'20px'}}> Owing to the superior quality of the product range offered, we have carved a firm foothold in the domain. The products offered
          by us are in compliance with industrial standards and are offered at most affordable prices. The professionals appointed by us
          invest their long working hours in manufacturing products as per clients' specifications and details to meet their exact
          requirements.
          We direct all our activities to cater the expectations of customers by providing them excellent quality products as per their
          gratifications. Moreover, we follow moral business policies and crystal pure transparency in all our transactions to keep healthy
          relations with the customers.</p>
      </div>
      <Bestproduct />
    </>
  );
};

export default Home;
