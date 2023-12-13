import React, {useEffect, useState} from "react";
import { Footer, Navbar } from "../components";
import firebase from 'firebase/compat/app';
import { useParams } from "react-router-dom";

const Quotes = () => {
  const { productnm } = useParams();
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
    },[productnm])
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
   
  
    const handleSaveData = async () => {
      try {
       
        const db = firebase.firestore();
        const documentId = userData.mobile;
        await db.collection('Enquary User').doc(documentId).set(userData);
      } catch (error) {
      }
    };
  


  return (
    <>
       <div className="container my-3 py-3">
        <h1 className="text-center">Enquery Here</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form >
            <div className="form my-3">
                <label for="Name"  >Product Name</label>
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
      </div>
    </>
  );
};

export default Quotes;
