import React from 'react';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Introduction from './components/introduction/introduction';
import Portfolio from './components/portfolio/portfolio';
import Topbar from './components/topbar/topbar';


const App = () => {
    return (
      <>
        <Header />
        <Topbar />
        <Introduction />
        <Experience />
        <Portfolio />
        <Contact />
      <Footer />
    </>
  )
}

export default App