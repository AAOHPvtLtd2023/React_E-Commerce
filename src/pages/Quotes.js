import React, { useEffect, useRef, useState } from "react";
import firebase from 'firebase/compat/app';
import { useParams } from "react-router-dom";

const Quotes = () => {
  const { productnm } = useParams();
  const form = useRef();
  const [userData, setUserData] = useState({
    ProductName: '',
    Name: '',
    mobile: '',
    Address: ''
  });

  useEffect(() => {
    setUserData(prevUserData => ({
      ...prevUserData,
      ProductName: productnm
    }));
  }, [productnm]);

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
      const db = firebase.firestore();
      const documentId = userData.mobile;

      if (!documentId) {
        console.error('Invalid documentId:', documentId);
        return;
      }

      await db.collection('enquiry').doc(documentId).set(userData);

      console.log('User data added to Firestore!');
    } catch (error) {
      console.error('Error adding user data to Firestore:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default page refresh
    handleSaveData();
  };

  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Enquiry Here</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="ProductName">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="ProductName"
                  name="ProductName"
                  value={userData.ProductName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form my-3">
                <label htmlFor="Name">Name</label>
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
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="Email"
                  value={userData.Email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                />
              </div>

              <div className="form my-3">
                <label htmlFor="phone">Phone no</label>
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

              <div className="form my-3">
                <label htmlFor="Address">Address</label>
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

              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
