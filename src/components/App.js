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

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/library" component={Library} />
        <Route path="/bookclub" component={BookClub} />
        <Route path="/littlefreelib" component={LittleFreeLib} />
      </Switch>
    </Router>
  )
}
