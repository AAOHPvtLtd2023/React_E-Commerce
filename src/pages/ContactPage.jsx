import React, { useRef, useState } from "react";
import { Footer, Navbar } from "../components";
import emailjs from '@emailjs/browser';
import parsePhoneNumber from 'libphonenumber-js';
import firebase from 'firebase/compat/app';
import './ContactPage.css';

const ContactPage = () => {
  const form = useRef();
  const [userData, setUserData] = useState({
    Name: '',
    mobile: '',
    Email: '',
    Address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value

    }));
  };



  const handleSaveData = async () => {
    console.log(userData);
    try {
      // Add user data to Firestore collection 'users1'
      const db = firebase.firestore();
      const documentId = userData.mobile;


      if (!documentId) {
        console.error('Invalid documentId:', documentId);
        return;
      }

      await db.collection('Contacted User').doc(documentId).set(userData);

      console.log('User data added to Firestore!');
    } catch (error) {
      console.error('Error adding user data to Firestore:', error);
    }
  };


  const sendEmail = (e) => {
    e.preventDefault();

    // try
    // await 
    handleSaveData();


    emailjs.sendForm('service_845gb0s', 'template_zrm2lcn', e.target, 'RQqkOuUx2VqtfW5IB')
      .then((result) => {
        console.log(result.text);
        console.log("massage sent");
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <>
      {/* <Navbar /> */}

      <div className="container my-3 py-3 ">
        <h1 className="text-center">Contact Us</h1>
        <hr />


        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form my-3">
                <label for="Name" style={{ color: '#ff6a00' }}  >Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="Name"
                  value={userData.Name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label for="Email" style={{ color: '#ff6a00' }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="mobileno"
                  name="Email"
                  value={userData.Email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                />
              </div>

              <div className="form my-3">
                <label for="Phone no" style={{ color: '#ff6a00' }}>Phone no</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="mobile"
                  value={userData.mobile}
                  onChange={handleInputChange}
                  placeholder="Enter your Phone No"
                />
              </div>

              <div className="form  my-3">
                <label for="Address" style={{ color: '#ff6a00' }}>Address</label>
                <textarea
                  rows={2}
                  className="form-control"
                  id="Address"
                  name="Address"
                  value={userData.Address}
                  onChange={handleInputChange}
                  placeholder="Enter your Address"
                />
              </div>



              <div className="form  my-3">
                <label for="Message" style={{ color: '#ff6a00' }}>Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Password"
                  name="message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  value="Send"
                  onClick={handleSaveData}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}
                >
                  Send
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ff6a00" d="M3 20v-6l8-2l-8-2V4l19 8l-19 8Z" /></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="all-admin-card">

          <div className="Admin-contact">
            {/* //add here */}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#ff6a00" stroke-width="2" d="M12 22s-8-6-8-12c0-5 4-8 8-8s8 3 8 8c0 6-8 12-8 12Zm0-9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" /></svg>
            <span>Address</span>
            <strong>
              Plot No 502/1237, Ogalapada, Janla Industrial Estate, Bhubaneswar, Odisha, 752054, India
            </strong>

          </div>
          <div className="Admin-contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ff6a00" d="m16.484 11.976l6.151-5.344v10.627zm-7.926.905l2.16 1.875c.339.288.781.462 1.264.462h.017h-.001h.014c.484 0 .926-.175 1.269-.465l-.003.002l2.16-1.875l6.566 5.639H1.995zM1.986 5.365h20.03l-9.621 8.356a.612.612 0 0 1-.38.132h-.014h.001h-.014a.61.61 0 0 1-.381-.133l.001.001zm-.621 1.266l6.15 5.344l-6.15 5.28zm21.6-2.441c-.24-.12-.522-.19-.821-.19H1.859a1.87 1.87 0 0 0-.835.197l.011-.005A1.856 1.856 0 0 0 0 5.855v12.172a1.86 1.86 0 0 0 1.858 1.858h20.283a1.86 1.86 0 0 0 1.858-1.858V5.855c0-.727-.419-1.357-1.029-1.66l-.011-.005z" /></svg>
            <span>Email</span>
            <strong>
              demo@gmail.com
            </strong>
          </div>
          <div className="Admin-contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ff6a00" d="M1 2h8.58l1.487 6.69l-1.86 1.86a14.08 14.08 0 0 0 4.243 4.242l1.86-1.859L22 14.42V23h-1a19.91 19.91 0 0 1-10.85-3.196a20.101 20.101 0 0 1-5.954-5.954A19.91 19.91 0 0 1 1 3V2Zm2.027 2a17.893 17.893 0 0 0 2.849 8.764a18.102 18.102 0 0 0 5.36 5.36A17.892 17.892 0 0 0 20 20.973v-4.949l-4.053-.9l-2.174 2.175l-.663-.377a16.073 16.073 0 0 1-6.032-6.032l-.377-.663l2.175-2.174L7.976 4H3.027Z" /></svg>
            <span>Phone number</span>
            <strong>8328977393 (Biswajit)</strong>
          </div>
        </div>

        <div className="map-container my-4" style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            title="location-map"
            src="https://www.google.com/maps/place/Bajarang+industries/@13.016374,77.496778,15z/data=!4m6!3m5!1s0x3bae3daf7ad6bd37:0xb91fdcfd81e5aa8!8m2!3d13.016374!4d77.496778!16s%2Fg%2F11k60nl49m?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
