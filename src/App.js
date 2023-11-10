// Inside App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration';
import Quiz from './components/Quiz';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
