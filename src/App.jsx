// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
// import About from './pages/about';
import './App.css';

const App = () => {
  return (
    <Router>
      <Home />
      {/* Your application routes and components */}
    </Router>
  );
};

// const App = () => {
//   return (
    // <Router>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/about">
    //       <About />
    //     </Route>
    //   </Switch>
    // </Router>
//   );
// };

export default App;