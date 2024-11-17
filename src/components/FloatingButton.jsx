// src/components/FloatingButtons.jsx
import React from "react";
import "./Designs/FloatingButtons.css"; // Create this CSS file for styling

const FloatingButtons = () => {
    return (
        <div className="floating-buttons">
            <a
                href="https://wa.me/9777062436"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                />
            </a>
            <a href="tel:+919777062436" className="call-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke="#344054" d="M25 14.583A10.417 10.417 0 0 1 35.417 25m-12.5-18.625A17 17 0 0 1 25 6.25A18.75 18.75 0 0 1 43.75 25q0 1.045-.125 2.083" /><path stroke="#306CFE" d="M31.25 43.75a27.5 27.5 0 0 1-9.042-3.98L26 34.334a4.167 4.167 0 0 1 5.583-1.062c.688.437 1.396.833 2.084 1.229a4.167 4.167 0 0 1 1.75 5.875l-1.292 1.98a2.44 2.44 0 0 1-2.875 1.395M7.646 15.98l2.083-1.293a4.167 4.167 0 0 1 5.938 1.521c.396.75.791 1.459 1.229 2.084a4.167 4.167 0 0 1-1.063 5.583l-5.541 3.854A27.5 27.5 0 0 1 6.25 18.75a2.44 2.44 0 0 1 1.396-2.77" /><path stroke="#306CFE" d="M10.292 27.73a37 37 0 0 0 5.375 6.603a37 37 0 0 0 6.604 5.375" /></g></svg>
            </a>
        </div>
    );
};

export default FloatingButtons;
