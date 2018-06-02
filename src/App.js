import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCu7oj9CuTa9KfcP2zsNz3VtQkiR4K44kw',
      authDomain: 'employees-7b9e5.firebaseapp.com',
      databaseURL: 'https://employees-7b9e5.firebaseio.com',
      projectId: 'employees-7b9e5',
      storageBucket: 'employees-7b9e5.appspot.com',
      messagingSenderId: '397540711856'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
};

export default App;