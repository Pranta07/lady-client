import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Navigation from "./Components/Shared/Navigation/Navigation";
import SubscribeSection from "./Components/SubscribeSection/SubscribeSection";
import Footer from "./Components/Shared/Footer/Footer";
import ShopSingle from "./Components/SingleShop/ShopSingle";
import ShopCatalog from "./Components/ShopCatalog/ShopCatalog";
import TopHeader from "./Components/Shared/Navigation/TopHeader";
import Deals from "./Components/Deals/Deals";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import CheckoutPage from "./Components/CheckoutPage/CheckoutPage";

function App() {
    return (
        <div className="App bg-gray-200">
            <Router>
                <TopHeader></TopHeader>
                <Navigation></Navigation>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="shopSingle/:id" element={<ShopSingle />} />
                    <Route path="shopCatalog" element={<ShopCatalog />} />
                    <Route path="deals" element={<Deals />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="about" element={<About />} />
                    <Route path="cart" element={<ShoppingCart />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <SubscribeSection></SubscribeSection>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
