import React from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <AppRouter />
    </Router>
  );
}

export default App;
