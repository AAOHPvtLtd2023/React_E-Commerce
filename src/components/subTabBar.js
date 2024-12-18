import React from "react";
import "../components/Designs/subTabBar.css";

const Subtabbar= ()=>{
    return(
        <div className="subtabbar-main">
            <div className="subtabbar-main-inner-wrap">
                <div className="subtabbar-main-inner-wrap-left">
                    All Categories
                </div>
                <div className="subtabbar-main-inner-wrap-right">
                    <div className="subtabbar-title">
                        <a href="/">Home</a>
                    </div>
                    <div className="subtabbar-title">
                        <a href="/product">products</a>
                    </div>
                    <div className="subtabbar-title">
                        <a href="/about">About</a>
                    </div>
                    <div className="subtabbar-title">
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Subtabbar;