
import React from 'react';

import { useColorScheme, StatusBar } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/Home';

const App = () => {

  return (
     <SafeAreaView>
       <StatusBar barStyle={(Platform.OS === 'ios') ? 'dark-content' : 'light-content'} />
       <Home/>
     </SafeAreaView>
  );
};


export default App;
