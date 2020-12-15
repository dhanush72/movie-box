import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';

function App() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route path="/show/:id">
          <Show />
        </Route>
        <Route>404 Page</Route>
      </Switch>
    </>
  );
}

export default App;
