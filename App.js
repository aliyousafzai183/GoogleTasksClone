
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// screens
import NoTasksScreen from './src/views/NoTasksYetScreen';
import NoStarredTasksScreen from './src/views/NoStarredTaskScreen';

function App() {
  return (
    <View style={styles.mainContainer}>
      {/* <NoTasksScreen /> */}
      <NoStarredTasksScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding:'3%'
  }
});

export default App;