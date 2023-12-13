import React from "react";

import a1 from '../icon/icon1.png'
import a2 from '../icon/icon2.png'
import a3 from '../icon/icon3.png'
import a4 from '../icon/icon4.png'
import a5 from '../icon/icon5.png'
import a6 from '../icon/icon6.png'
import './Designs/advertisemnt.css';


function Smalladv(){
    return(
        <section id="feature" class="section-p1">
    <div class="fe-box">
        <img src={a1}/>
        <h6>Free Shipping</h6>
    </div>

    <div class="fe-box">
        <img src={a2}/>
        <h6>Online Order</h6>
    </div>

    <div class="fe-box">
        <img src={a3}/>
        <h6>Save money</h6>
    </div>

    <div class="fe-box">
        <img src={a4}/>
        <h6>Easy Delivery</h6>
    </div>

    <div class="fe-box">
        <img src={a5}/>
        <h6>Happy sale</h6>
    </div>
    
    <div class="fe-box">
        <img src={a6}/>
        <h6>24/7 support</h6>
    </div>

</section>
    );
}

export default Smalladv;