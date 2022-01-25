import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection/HeroSection";
import NotFound from "./Components/NotFound/NotFound";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Trending from "./Components/Trending/Trending";

function App() {
    return (
        <div className="App bg-gray-200">
            <Navigation></Navigation>
            <HeroSection></HeroSection>
            <Trending></Trending>
            <NotFound></NotFound>
        </div>
    );
}

export default App;
