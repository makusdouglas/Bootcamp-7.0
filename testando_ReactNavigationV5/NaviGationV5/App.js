/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
function navigatorHandler(navigation, where) {
  navigation.navigate(where);
}
function navigatorPushHandler(navigation, where) {
  navigation.push(where);
}
function navigatorBack(navigation) {
  navigation.goBack();
}
function navigatorToTop(navigation) {
  navigation.popToTop();
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.View}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.TouchableButton}
        onPress={() => navigatorHandler(navigation, 'Details')}>
        <Text style={styles.TextButton}> Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};
const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.View}>
      <Text>Details Screen</Text>
      <TouchableOpacity
        style={styles.TouchableButton}
        onPress={() => navigatorPushHandler(navigation, 'Details')}>
        <Text style={styles.TextButton}> Go to Details ... Again</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableButton}
        onPress={() => navigatorHandler(navigation, 'Home')}>
        <Text style={styles.TextButton}> Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableButton}
        onPress={() => navigatorBack(navigation)}>
        <Text style={styles.TextButton}> Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableButton}
        onPress={() => navigatorToTop(navigation)}>
        <Text style={styles.TextButton}> Go to the first screen</Text>
      </TouchableOpacity>
    </View>
  );
};
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0099cc',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  View: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableButton: {
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0099cc',
    padding: 10,
  },
  TextButton: {
    fontSize: 18,
    color: '#0099cc',
  },
});
export default App;
