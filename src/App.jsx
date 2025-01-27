
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/testimonials";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
    
    </>
  );
};

export default App;
