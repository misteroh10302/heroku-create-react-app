import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio'
import Layout from './components/Layout';



const App = () => {
  return (
    <Layout>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
        </nav>
        <Switch>
          <Route path="/portfolio" render={() => <Portfolio />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
