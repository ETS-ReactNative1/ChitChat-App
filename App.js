import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from "react-redux";
import { store } from './src/store/index'

import StartScreen from './src/screens/StartScreen'

const App = () => {
  return (
    <Provider store={store}>
      <>
        <StartScreen />
      </>
    </Provider>
  )
}

export default App
