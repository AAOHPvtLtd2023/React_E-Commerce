import { Home, Products, AboutPage, ContactPage, Register, PageNotFound } from "./pages"
import { Routes, Route } from 'react-router-dom';
import Quotes from "./pages/Quotes";
import Productdetails from "./pages/ProductDetails";
import FullGallery from "./pages/FullGallery";
import FloatingButtons from "./components/FloatingButton";
import { Footer, Navbar } from "./components";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";

function App() {
    return (
        <>
            <FloatingButtons />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product/:catID" element={<Products />} />
                <Route path="/product/:catId/:productId" element={<Productdetails />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/product/*" element={<PageNotFound />} />
                <Route path="/enquery/:productnm" element={<Quotes />} />
                <Route path="/Gallery" element={<FullGallery />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
                <Route path="/terms-condition" element={<TermsCondition/>} />
            </Routes>
            <Footer />
        </>
    );
}
export default App;