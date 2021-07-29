import React from 'react';
import { Link, Route } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/login' >Sign In</Link>
        <Link to='/FriendsList' >Friends</Link>
      </nav>

      <PrivateRoute path="/FriendsList" component={FriendsList} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
