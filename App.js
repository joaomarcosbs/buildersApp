
import React from 'react';

import { useColorScheme } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/Home';

const App = () => {

  return (
     <SafeAreaView>
       <Home/>
     </SafeAreaView>
  );
};


export default App;
