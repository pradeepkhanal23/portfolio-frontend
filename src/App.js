import React, { useState } from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar, Loader } from "./components";
import "./App.scss";

const App = () => {
  const [loading, setLoading] = useState(false);

  // React.useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4500);
  // }, []);

  return (
    <>
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
    </>
  );
};

export default App;
