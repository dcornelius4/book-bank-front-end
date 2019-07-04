import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LittleFreeLib from '../components/lfb/LittleFreeLib';
import Library from '../components/library/Library';
import Home from './Home';
import CreateLibrary from '../containers/libraries/CreateLibrary';
import { NavigationBar } from '../components/layout/NavigationBar';
import { Jumbotron } from '../components/layout/Jumbotron';

export default function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/library" component={Library} />
          <Route path="/add" component={CreateLibrary} />
          <Route path="/littlefreelib" component={LittleFreeLib} />
        </Switch>
      </Router>
    </>
  );
}
