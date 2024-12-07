import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LocationScreen from './screens/LocationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Location">
        {/* Tela principal com a localização */}
        <Stack.Screen 
          name="Location" 
          component={LocationScreen} 
          options={{ title: 'Minha Localização' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
