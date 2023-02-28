import React, { useState } from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar, Loader } from "./components";
import "./App.scss";

const App = () => {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <Loader />
      ) : (
        <div className="app">
          <Navbar />
          <Header />
          <About />
          <Work />
          <Skills />
          <Footer />
        </div>
      )}
    </React.StrictMode>
  );
};

export default App;
