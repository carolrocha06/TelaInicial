import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './screens/Tela1';
import Login from './screens/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela1">
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
