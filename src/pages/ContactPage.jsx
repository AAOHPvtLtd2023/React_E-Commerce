import React, {useRef, useState} from "react";
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
                <label for="Name"  >Name</label>
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
                <label for="Email">Email</label>
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
                <label for="Email">Phone no</label>
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
                <label for="Address" >Address</label>
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
                <label for="Password">Message</label>
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
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="Admin-contact">
          <span>Biswajit</span>
          <p>
            Plot No 502/1237, Ogalapada, Janla Industrial Estate, Bhubaneswar, Odisha, 752054, India
          </p>
          <strong>8328977393</strong>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
