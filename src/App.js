import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import PortfolioNew from './components/Portfolio'
import Layout from './components/Layout';
import PortfolioAll from './components/PortfolioAll'


const App = () => {
  return (
    <Layout>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/portfolio/new">Create</Link>
          <Link to="/portfolio/">Work</Link>
        </nav>
        <Switch>
          <Route path="/portfolio/new" render={() => <PortfolioNew />} />
          <Route path="/portfolio/" render={() => <PortfolioAll />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
