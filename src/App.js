import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection/HeroSection";
import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
    return (
        <div className="App">
            <Navigation></Navigation>
            <HeroSection></HeroSection>
        </div>
    );
}

export default App;
