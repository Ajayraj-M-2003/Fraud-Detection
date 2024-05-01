import React from 'react';
import Faq from './faq.jsx';
import About from './about.jsx';
import Top from './top.jsx';
import Updates from './updates.jsx';
import Footer from './footer.jsx';
import Planning from './planning.jsx';

const Landing = () => {
  return (
    <div className="landing-body">
      <Top />
      <Updates />
      <About />
      <Planning />
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
