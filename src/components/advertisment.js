import React from "react";

import a1 from "../icon/icon1.png";
import a2 from "../icon/icon2.png";
import a3 from "../icon/icon3.png";
import a4 from "../icon/icon4.png";
import a5 from "../icon/icon5.png";
import a6 from "../icon/icon6.png";
import "./Designs/advertisemnt.css";
import { CiDeliveryTruck, CiShoppingCart } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { RiBillLine } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";



function Smalladv() {
  return (
    <div id="feature" class="section-p1">
     
      <div class="fe-box">
        {/* <img src={a2}/> */}
        <CiShoppingCart size={52} />
        <h6>Online Order</h6>
      </div>

      <div class="fe-box">
        {/* <img src={a3}/> */}
        <GiReceiveMoney size={52} />
        <h6>Save money</h6>
      </div>

      <div class="fe-box">
        {/* <img src={a4}/> */}
        <GrUserWorker size={52} />
        <h6>Easy Delivery</h6>
      </div>

      <div class="fe-box">
        {/* <img src={a5}/> */}
        <RiBillLine size={52} />

        <h6>Happy sales</h6>
      </div>

      <div class="fe-box">
        {/* <img src={a6} /> */}
        <MdSupportAgent size={52} />

        <h6>24/7 support</h6>
      </div>
    </div>
  );
}

export default Smalladv;
