import React from 'react';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import Portfolio from './components/portfolio/Portfolio';


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