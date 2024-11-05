import { Home, Product, Products, AboutPage, ContactPage, Login, Register, PageNotFound } from "./pages"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quotes from "./pages/Quotes";
import Productdetails from "./pages/ProductDetails";
import ProductGallery from "./components/ProductGallery";

function App() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Products />} />
                    <Route path="/product/:catID" element={<Products />} />
                    <Route path="/product/:catId/:productId" element={<Productdetails />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/product/*" element={<PageNotFound />} />
                    <Route path="/enquery/:productnm" element={<Quotes />} />
                    <Route path="/Productdetails" element={Productdetails} />
                </Routes>                
        </>
    );
}
export default App;