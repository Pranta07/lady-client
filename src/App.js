import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection/HeroSection";
// import NotFound from "./Components/NotFound/NotFound";
import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
    return (
        <div className="App">
            <Navigation></Navigation>
            <HeroSection></HeroSection>
            {/* <NotFound></NotFound> */}
        </div>
    );
}

export default App;
