
// import React from 'react';
// import { CssBaseline, Container } from '@mui/material';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/sections/Navbar';
// import Home from './components/sections/Home';
// import WhyKayan from './components/sections/WhyKayan';
// import Demo from './components/sections/Demo';
// import ProviderSolutions from './components/sections/ProviderSolutions';
// import PayerSolutions from './components/sections/PayerSolutions';
// import ContactUs from './components/sections/ContactUs';
// import Footer from './components/sections/Footer';
// import HowItWork from './components/sections/HowItWork';
// import Solutions from './components/sections/Solutions';
// import OurStory from './components/sections/ourStory';
// import OurBenefits from './components/sections/OurBenefits';
// import TrustKayan from './components/sections/TrustKayan'
// import ExpertsSection from './components/sections/ExpertsSection';

// import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "../src/LanguageSwitcher";
// import "../src/i18n"; // استيراد إعدادات الترجمة

// const App = () => {
//   const { t } = useTranslation();
//   return (
//     <Router>
     
//       <Navbar />
//         <div>
//         <section id="home">
//           <Home />
//         </section>
//         <section id="whykayan">
//           <WhyKayan />
//         </section>
//         <section id="how-it-works">
//           <HowItWork/>
//         </section>
//       <section id="solution">
//           <Solutions />
//         </section> 
//         {/* <section id="provider-solutions">
//           <ProviderSolutions />
//         </section>
//         <section id="payer-solutions">
//           <PayerSolutions />
//         </section> */}
//         {/* <section id="demo">
//           <Demo />
//         </section> */}
//         <section id="our-benefits">
//         <OurBenefits />
//         </section>
//         <section id="our-story">
//           <OurStory/>
//         </section>
//        <section id="our-experts">
//         <ExpertsSection/>
//        </section>
//         <section id="trust-kayan">
// <TrustKayan />
//         </section>
//         <section id="contactUs">
//           <ContactUs />
//         </section>
//       </div>

//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import Home from './components/sections/Home';
import Benefits from './components/sections/Benefits';
import HowItWork from './components/sections/HowItWork';
import Solutions from './components/sections/Solutions';
import OurBenefits from './components/sections/OurBenefits';
import OurStory from './components/sections/ourStory';
import ExpertsSection from './components/sections/ExpertsSection';
import TrustKayan from './components/sections/TrustKayan';
import ContactUs from './components/sections/ContactUs';
import Footer from './components/sections/Footer';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../src/LanguageSwitcher";
import "../src/i18n"; // استيراد إعدادات الترجمة
import OurClient from './components/sections/OurClient';
import '@fontsource/montserrat/400.css'; // الوزن العادي (Regular)
import '@fontsource/montserrat/600.css'; // الوزن SemiBold
import '@fontsource/montserrat/700.css'; // الوزن Bold
import '@fontsource/roboto/400.css'; // الوزن العادي (Regular)
import '@fontsource/roboto/500.css'; // الوزن Medium
import '@fontsource/roboto/700.css'; // الوزن Bold
import '@fontsource/josefin-sans/400.css'; // الوزن العادي
import '@fontsource/josefin-sans/600.css'; // الوزن المتوسط
import '@fontsource/josefin-sans/700.css'; // الوزن الثقيل
import '@fontsource/inter/400.css'; // Regular
import '@fontsource/inter/600.css'; // Semi-bold
import '@fontsource/inter/700.css'; // Bold
import OurFeeds from './components/sections/OurFeeds';
import AboutUs from './components/sections/AboutUs';
import OurTechnology from './components/sections/OurTechnology';
const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <Navbar />
     
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="benefits">
          <Benefits />
        </section>
        <section id="how-it-works">
          <HowItWork />
        </section>
        <section id="our-story">
          <OurStory />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="solution">
          <Solutions />
        </section>
        <section id="our-technology">
          <OurTechnology />
        </section>
        <section id="our-feeds">
          <OurFeeds />
        </section>
        {/* <section id="our-benefits">
          <OurBenefits />
        </section> */}
        <section id="our-experts">
          <ExpertsSection />
        </section>
        <section id="trust-kayan">
          <TrustKayan />
        </section>
        <section id="our-clients"><OurClient/></section>
        <section id="contactUs">
          <ContactUs />
        </section>
       
      </div>
      <Footer /> 
    </Router>
  );
};

export default App;
