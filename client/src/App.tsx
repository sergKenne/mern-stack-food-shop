import * as React from 'react';
import Footer from './components/footer';

import Header from './components/header';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="page">
      <Header />

      <Home />

      <Footer />
    </div>
  );
};

export default App;
