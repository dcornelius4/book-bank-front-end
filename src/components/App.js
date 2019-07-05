import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LittleFreeLib from '../components/libraries/library/LittleFreeLib';
import Library from '../components/libraries/library/MyLibrary';
import Map from './Map';
import CreateLibrary from '../containers/libraries/CreateLibrary';
import { NavigationBar } from '../components/layout/NavigationBar';
import { Jumbotron } from '../components/layout/Jumbotron';
import { withSession } from '../containers/auth/withSession';
import Callback from '../containers/auth/Callback';
import LibraryById from '../containers/libraries/LibraryById';
import CreateBook from '../containers/books/CreateBook';

export default function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={withSession(CreateLibrary)} />
          <Route path="/callback" component={Callback} />
          <Route path="/library" component={withSession(Library)} />
          <Route path="/map" component={withSession(Map)} />
          <Route path="/littlefreelib" component={withSession(LittleFreeLib)} />
          <Route path="libraries/:id" component={LibraryById} />
          <Route path="/libraries/:id/books/:bookId" component={CreateBook} />
        </Switch>
      </Router>
    </>
  );
}
