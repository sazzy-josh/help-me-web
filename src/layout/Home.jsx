import Border from "../pages/home/Border";
import Features from "../pages/home/Features";
import Hero from "../pages/home/Hero";
import HowItWorks from "../pages/home/HowItWorks";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Border />
      <Features />
      <Border />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
