import React from 'react';
import './App.css';
import { HomePage } from "./page/HomePage";
import { CreateBiblePage } from "./page/CreateBiblePage";
import { BibleListPage } from "./page/BibleListPage";
import { BibleDetailPage } from "./page/BibleDetailPage";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

// Usually Do Routing Here
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Route
          path = '/'
          exact = {true}
          component = {HomePage}
        />
        <Route
          path = '/home'
          exact = {true}
          component = {HomePage}
        />
        <Route
          path = '/create-bible'
          exact = {true}
          component = {CreateBiblePage}
        />
        <Route
          path = '/bible-list'
          exact = {true}
          component = {BibleListPage}
        />
        <Route
          path = '/bible/:id'
          component = {BibleDetailPage}
        />
      </div>
    </Router>
  );
}

export default App;
