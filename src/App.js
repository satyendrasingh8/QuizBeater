import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from "./components/contact";
import About from "./components/about";
import Home from "./components/home";
import Header from "./components/header";
import Disclaimer from "./components/disclaimer";
import PrivacyPolicy from "./components/privacyPolicy";
import Footer from "./components/footer";
import FAQ  from "./components/faq";
import SelectOption from "./components/selectOption";
import TermsAndCondition from "./components/termsandcondition";
import FetchedQus from "./components/fetchedQus";


function App() {
  return (
    <div className="App">
     <Router>
      <div >
        <Header/>
        <div className="container">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact"> 
            <Contact />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/createBlog">
            <SelectOption />
          </Route>
          <Route path="/fetchedTrivia">
            <FetchedQus />
          </Route>
          <Route path="/disclaimer">
            <Disclaimer />
          </Route>
          <Route path="/termsAndCondition">
            <TermsAndCondition />
          </Route>
          <Route path="/privacyPolicy">
            <PrivacyPolicy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        

        </Switch>
     
        </div>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
