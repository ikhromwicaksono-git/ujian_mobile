import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import MainNavigation from './src/navigation/mainNavigation';
import reducers from './src/reducer';

class App extends React.Component {
  render() {
    return (
      <Provider store = {createStore(reducers, {}, applyMiddleware(reduxThunk))} >
          <NavigationContainer>
              <MainNavigation />
          </NavigationContainer>
          </Provider>
     
    )
  }
}

export default App