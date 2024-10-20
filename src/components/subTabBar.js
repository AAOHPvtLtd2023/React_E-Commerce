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
                        <a>Home</a>
                    </div>
                    <div className="subtabbar-title">
                        <a>products</a>
                    </div>
                    <div className="subtabbar-title">
                        <a>About</a>
                    </div>
                    <div className="subtabbar-title">
                        <a>Contact</a>
                    </div>
                    <div className="subtabbar-title">
                        <a>Free shipping on all orders</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Subtabbar;