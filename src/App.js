// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar';
//  import Home from './Home';
// import ContactUs from './ContactUs';
// import About from './About';
// import Solution from './Solution';
// import Demo from './Demo'
// import ProviderSolutions from './ProviderSolutions';
// import PayerSolutions from './PayerSolutions';
// import Footer from './Footer';
// // import Home from './components/FullPageCarousel';
// function App() {
//   return (
//     <Router>
//       <Routes>
//     <Navbar />
//     {/* <Routes> */}
//       {/* <Route path="/" element={ <FullPageCarousel />} /> */}
//       <Route path="/" element={ <Home />} />

//       <Route path="/about" element={<About />} />
//       <Route path="/solution" element={<Solution />} />
//       <Route path="/demo" element={<Demo />} />

//       <Route path="/solution" element={<Solution />} /> 
//       <Route path="/provider-solutions" element={<ProviderSolutions />} />
//       <Route path="/payer-solutions" element={<PayerSolutions />} />
//       <Route path="/contactUs" element={<ContactUs />} />
//     {/* </Routes> */}
     
//      <Footer />
//      </Routes>
//   </Router>

//   );
// }

// export default App;
import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import Home from './components/sections/Home';
import WhyKayan from './components/sections/WhyKayan';
import Demo from './components/sections/Demo';
import ProviderSolutions from './components/sections/ProviderSolutions';
import PayerSolutions from './components/sections/PayerSolutions';
import ContactUs from './components/sections/ContactUs';
import Footer from './components/sections/Footer';
import HowItWork from './components/sections/HowItWork';
import Solutions from './components/sections/Solutions';
function App() {
  return (
    <Router>
     
      <Navbar />
        <div>
        <section id="home">
          <Home />
        </section>
        <section id="whykayan">
          <WhyKayan />
        </section>
        <section id="how-it-works">
          <HowItWork/>
        </section>
      <section id="solution">
          <Solutions />
        </section> 
        {/* <section id="provider-solutions">
          <ProviderSolutions />
        </section>
        <section id="payer-solutions">
          <PayerSolutions />
        </section> */}
        {/* <section id="demo">
          <Demo />
        </section> */}
        
        <section id="contactUs">
          <ContactUs />
        </section>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
