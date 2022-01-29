import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Navigation from "./Components/Shared/Navigation/Navigation";
import SubscribeSection from "./Components/SubscribeSection/SubscribeSection";
import Footer from "./Components/Shared/Footer/Footer";
import ShopSingle from "./Components/SingleShop/ShopSingle";
import ShopCatalog from "./Components/ShopCatalog/ShopCatalog";

function App() {
    return (
        <div className="App bg-gray-200">
            <Router>
                <Navigation></Navigation>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="shopSingle" element={<ShopSingle />} />
                    <Route path="shopCatalog" element={<ShopCatalog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <SubscribeSection></SubscribeSection>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
