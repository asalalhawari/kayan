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
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Solution from './Solution';
import Demo from './Demo';
import ProviderSolutions from './ProviderSolutions';
import PayerSolutions from './PayerSolutions';
import ContactUs from './ContactUs';
import Footer from './Footer';

function App() {
  return (
    <Router>
     
      <Navbar />
        <div>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        {/* <section id="solution">
          <Solution />
        </section> */}
        <section id="provider-solutions">
          <ProviderSolutions />
        </section>
        <section id="payer-solutions">
          <PayerSolutions />
        </section>
        <section id="demo">
          <Demo />
        </section>
        
        <section id="contactUs">
          <ContactUs />
        </section>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
