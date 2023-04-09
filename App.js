import * as React from 'react';

// Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen
import MainView from './src/views/screens/MainView';
import ViewTask from './src/views/screens/ViewTask';
import AddList from './src/views/screens/AddList';

// redux
// redux
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={MainView}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="ViewTask" component={ViewTask} />
          <Stack.Screen name="AddList" component={AddList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;