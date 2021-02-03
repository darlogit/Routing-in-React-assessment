
import React from 'react';
import { Route } from 'react-router-dom'
import logo from "./logo.svg";
import './App.css';
import Welcome from "./components/Welcome/Welcome"
import Clock from "./components/Clock/Clock"
import Contact from "./components/Contact/Contact"
import Navigation from './components/Navigation/Navigation';
import FourOFour from './components/FourOFour/FourOFour';
import Jeopardy from "./components/Jeopardy/Jeopardy"


function App() {
  return (
    <div className="App">
      {/* <Switch> */}
      <Navigation />

      <Route
        exact
        path="/"
        render={(props) => <Welcome {...props} name="Darl" />} />
      <Route path="/Clock" component={Clock} />
      <Route path="/Contact" component={Contact} />
      <Route path="/FourOFour" component={FourOFour} />
      <Route path="/Jeopardy" component={Jeopardy} />

      {/* </Switch> */}



    </div>
  );
}
export default App;
