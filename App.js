import React, {useEffect} from 'react';
import { Home } from './src/screens/Home';
import { SaveOrganizations } from './src/screens/SaveOrganizations';
import SplashScreen from 'react-native-splash-screen';

export default function App(){

  useEffect(() => {
    SplashScreen.hide()
  },[])

  return(
    <>
      <Home />
      {/* <SaveOrganizations /> */}
    </>
  )
}