import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LittleFreeLib from '../components/lfb/LittleFreeLib';
import Library from '../components/library/Library';
import BookClub from '../components/bookclub/BookClub';
import Home from './Home';
// import Layout from './layout/Layout';
import { NavigationBar } from '../components/layout/NavigationBar';
import { Jumbotron } from '../components/layout/Jumbotron';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/library" component={Library} />
          <Route path="/bookclub" component={BookClub} />
          <Route path="/littlefreelib" component={LittleFreeLib} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
