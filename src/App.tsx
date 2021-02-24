import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={UserList}></Route>
      <Route path="/new-user" component={UserForm}></Route>
      <Route path="/update-user/:id" component={UserForm}></Route>
    </Switch>
    <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
