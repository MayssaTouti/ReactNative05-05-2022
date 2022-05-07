/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import { 
      NavigationContainer, 
      DefaultTheme as NavigationDefaultTheme,
      DarkTheme as NavigationDarkTheme
    } from '@react-navigation/native';
//import React, { useEffect } from 'react'; 
//import { View, ActivityIndicator } from 'react-native';
//import { createDrawerNavigator} from '@react-navigation/drawer'; 
import RootStackScreen from './screens/RootStackScreen'; 
//import { DrawerContent } from './screens/DrawerContent'; 




//const Drawer = createDrawerNavigator(); 

const App = () => {
return (
<NavigationContainer>
      <RootStackScreen/>
{/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
      <Drawer.Screen name="SupportScreen" component={SupportScreen}/>
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen}/>
      


</Drawer.Navigator>
   */}
  
</NavigationContainer>


)};



export default App;
