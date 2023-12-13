import React, { useEffect, useState } from "react";
import "./Designs/BestProduct.css";
import AOS from "aos";
import { db } from './firebaase.js';

function Bestproduct() {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    const fetchProduct = async (cat, id) => {
      try {
        const snapshot = await db
          .collection('categories')
          .doc(cat)
          .collection('products')
          .doc(id)
          .get();

        const productData = snapshot.data();
        return productData;
      } catch (error) {
        console.error('Error fetching product data: ', error);
        return null;
      }
    };

    const bestproduct = async () => {
      try {
        const snapshot = await db.collection('bestproduct').get();

        const productsArray = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const { category, product } = doc.data();
            const productData = await fetchProduct(category, product);

            if (productData) {
              return {
                id: doc.id,
                ...productData,
              };
            }
            return null;
          })
        );

        // Filter out null values (failed fetches) and update the state
        setProductsArray(productsArray.filter((product) => product !== null));
      } catch (error) {
        console.error('Error fetching bestproduct data: ', error);
      }
    };

    bestproduct();
  }, []);

 

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
      // Other configuration options...
    });
  }, []);

  // ... (return statement and the rest of the component)


  return (
    <>
      <h2 style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Lora, serif' }}> CATALOUGE</h2>

      <div data-aos="fade-up" className="best_c">
        {productsArray.map((p) => (
          <div key={p.id} className="card15">
            <div className="card15-inner">
              <div className="card15-front">
                <img
                  className="bestprroductimage"
                  src={p.photos[0]}
                  style={{ height: '200px', width: '300px', borderRadius: '10px' }}
                />
              </div>
              <div className="card15-back">
                <p>{p.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


    </>
  );
}

export default Bestproduct;
