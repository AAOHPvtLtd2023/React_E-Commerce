import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { db } from "../components/firebaase.js";
import { Footer, Navbar } from "../components";
import './product.css'
import sanitizeHtml from 'sanitize-html';
import icon1 from '../icon/noreturn.gif';
import icon2 from '../icon/delivery.gif';
import icon3 from '../icon/secure.gif';
import icon4 from '../icon/warenty.gif';
import Slider from 'react-touch-drag-slider'


const Product = () => {
  const { catId, productId } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const snapshot = await db
          .collection('categories')
          .doc(catId)
          .collection('products')
          .doc(productId)
          .get();

        const productData = snapshot.data();
        setProduct(productData);
        console.log(productData);
        const sanitizedDescription = sanitizeHtml(productData.description);
        setDescription(sanitizedDescription);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchProduct();
  }, [catId, productId]);

  useEffect(() => {
    const fetchSimilarProduct = async (cat, id) => {
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

    const Similarproduct = async () => {
      try {
        setLoading2(true);
        const snapshot = await db.collection('bestproduct').get();

        const productsArray = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const { category, product } = doc.data();
            const productData = await fetchSimilarProduct(category, product);

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
        setSimilarProducts(productsArray.filter((product) => product !== null));
        setLoading2(false);
      } catch (error) {
        console.error('Error fetching bestproduct data: ', error);
        setLoading2(false);
      }
    };

    Similarproduct();
  }, []);




  const createMarkup = () => {
    return { __html: description };
  };


  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
             
              {product.photos && product.photos.length > 0 ? (
                <Slider
                  activeIndex={0}
                  threshHold={100}
                  transition={0.5}
                  scaleOnDrag={true}
                >
                  {product.photos.map((url, index) => (
                    <img className="img-fluid" src={url} key={index} alt={product.title} />
                  ))}
                </Slider>

              ) : (
                <p>No media available</p>
              )}


            </div>

            <div className="col-md-6 col-md-6 py-5">
              <h1 className="display-5">
                {product.title}
              </h1>
              <p className="lead">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </p>
              <div class="cards">
                <div class="card10 red">
                  <p class="tip">Warranty</p>
                  <p class="second-text"><img src={icon4} style={{ height: '7vh', width: '7vw', marginLeft: '-12px' }} /></p>
                </div>
                <div class="card10 blue">
                  <p class="tip">Delivery</p>
                  <p class="second-text"><img src={icon2} style={{ height: '5vh', width: '7vw', marginLeft: '-12px' }} /></p>
                </div>
                <div class="card10 green">
                  <p class="tip">Secure</p>
                  <p class="second-text"><img src={icon3} style={{ height: '7vh', width: '7vw', marginLeft: '-15px' }} /></p>
                </div>
                <div class="card10 green">
                  <p class="tip">Non Returnable</p>
                  <p class="second-text"><img src={icon1} style={{ height: '7vh', width: '7vw', marginLeft: '-15px' }} /></p>
                </div>
              </div>

              <div class="card2">
                <div class="small-desc" dangerouslySetInnerHTML={createMarkup()} />
                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </div>


              <div classname="button_area" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Link to={"/contact"}> <button>Contact Us </button> </Link>
                <Link to={"/enquery/" + product.title}><button> Get Quote</button></Link>
              </div>
            </div>

            <div>
              <div className="videoWrapper" >
                {product.videoURL &&
                  <div>
                    <video className="responsiveVideo" autoPlay={true} loop={true} muted={true}>
                      <source src={product.videoURL} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                }
              </div>
            </div>
          </div>


          <div className="spec_c">
            <div class="card1">
              <span class="title1">Specifications</span>
              <div class="card1__tags">
                {product.specifications &&
                  product.specifications.map((spec, index) => (
                    <ul key={index} class="tag">
                      <li class="tag1__name"><strong>{spec.name}:</strong> {spec.value}</li>
                    </ul>
                  ))}

              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.photos[0]}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title}
                    </h5>
                  </div>
                 
                  <div className="card-body">
                    <Link
                      to={"/product/" +item.category+ '/'+ item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;


