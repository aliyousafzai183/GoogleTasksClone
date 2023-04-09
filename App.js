import * as React from 'react';

// Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen
import MainView from './src/views/screens/MainView';
import ViewTask from './src/views/screens/ViewTask';
import AddList from './src/views/screens/AddList';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={MainView}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen name="ViewTask" component={ViewTask}/>
        <Stack.Screen name="AddList" component={AddList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;