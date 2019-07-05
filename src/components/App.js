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
import LibraryById from '../containers/libraries/LibraryById';
import CreateBook from '../containers/books/CreateBook';

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
          <Route path="/libraries/:id" component={LibraryById} />
          <Route path="/libraries/:id/books/:bookId" component={CreateBook} />
        </Switch>
      </Router>
    </>
  );
}
