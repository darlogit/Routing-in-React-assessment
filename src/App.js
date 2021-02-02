
import React from 'react';
import { Route } from 'react-router-dom'
import logo from "./logo.svg";
import './App.css';
import Welcome from "./components/Welcome/Welcome"
import Clock from "./components/Clock/Clock"
import Contact from "./components/Contact/Contact"
import Navigation from './components/Navigation/Navigation';
// import Jeopardy from "./Components/Jeopardy/Jeopardy"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route
        exact
        path="/"
        render={(props) => <Welcome {...props} name="Darl" />} />
      <Route path="/Clock" component={Clock} />
      <Route path="/Contact" component={Contact} />

    </div>
  );
}
export default App;
