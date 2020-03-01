import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import Shop from './pages/Shop/Shop';
import Header from './components/header/Header';
import SignIn from './pages/SignIn/SignIn';
import './App.css';

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route path='/signin' component={SignIn} />
        </Switch>
    </div>
  );
}

export default App;
