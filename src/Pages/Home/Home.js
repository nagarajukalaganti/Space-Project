import Navbar from '../../Components/Navbar/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import CallToAction from './Components/CallToAction';
import Faq from './Components/Faq';

import "../Home/Homestyles.css";
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About heading="About us"/>
      <Services />
      <CallToAction />
      <Faq />
      <Footer/>
    </>
  )
}

export default Home