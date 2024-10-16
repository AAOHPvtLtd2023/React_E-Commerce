import { Home, Product, Products, AboutPage, ContactPage, Login, Register, PageNotFound } from "./pages"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quotes from "./pages/Quotes";

function App() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Products />} />
                    <Route path="/product/:catId/:productId" element={<Product />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/product/*" element={<PageNotFound />} />
                    <Route path="/enquery/:productnm" element={<Quotes />} />
                </Routes>
        </>
    );
}
export default App;