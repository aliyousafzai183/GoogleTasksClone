import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

// Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen
import MainView from './src/views/screens/MainView';
import ViewTask from './src/views/screens/ViewTask';

const HomeScreen = () => {
  return (
    <MainView />
  )
}

const TaskScreen = () => {
  return (
    <ViewTask />
  )
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="View Task" component={TaskScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  app:{
      flex:1,
      backgroundColor:'#333'
  }
})