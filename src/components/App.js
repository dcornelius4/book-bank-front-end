import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LittleFreeLib from '../components/libraries/library/LittleFreeLib';
import Library from '../components/libraries/library/MyLibrary';
import Home from './Home';
import CreateLibrary from '../containers/libraries/CreateLibrary';
import { NavigationBar } from '../components/layout/NavigationBar';
import { Jumbotron } from '../components/layout/Jumbotron';
import { withSession } from '../containers/auth/withSession';
import Callback from '../containers/auth/Callback';

export default function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={withSession(Home)} />
          <Route path="/callback" component={Callback} />
          <Route path="/library" component={withSession(Library)} />
          <Route path="/add" component={withSession(CreateLibrary)} />
          <Route path="/littlefreelib" component={withSession(LittleFreeLib)} />
        </Switch>
      </Router>
    </>
  );
}
