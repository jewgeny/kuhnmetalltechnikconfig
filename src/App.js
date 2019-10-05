import React from 'react';
import "./Components/style/App.scss";
import Header from "./Components/Header/Header";
import Auswahl from "./Components/Main/Auswahl";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Zaune from "./Components/Main/Zaune/Zaune";


function App() {
  return (
    <BrowserRouter>
      <div className="MainWrapper">
          <Header />
          <Route exact path="/" render={() => <Auswahl />} />
          <Route path="/zaune" render={() => <Zaune /> } />
      </div>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
