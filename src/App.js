import "./App.css";
import DressCollection from "./Components/DressCollection/DressCollection";
import HappyCustomers from "./Components/HappyCustomers/HappyCustomers";
import HeroSection from "./Components/HeroSection/HeroSection/HeroSection";
// import NotFound from "./Components/NotFound/NotFound";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Trending from "./Components/Trending/Trending";

function App() {
    return (
        <div className="App bg-gray-200">
            <Navigation></Navigation>
            <HeroSection></HeroSection>
            <Trending></Trending>
            <DressCollection></DressCollection>
            <HappyCustomers></HappyCustomers>
            {/* <NotFound></NotFound> */}
        </div>
    );
}

export default App;
