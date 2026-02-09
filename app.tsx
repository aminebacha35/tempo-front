import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/pages';
import SignupStep1 from './app/pages/signup/step1';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen" // Définit HomeScreen comme écran initial
        screenOptions={{ headerShown: false }} // Cache l'en-tête par défaut
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignupStep1" component={SignupStep1} />
        {/* Ajoutez d'autres écrans ici */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
