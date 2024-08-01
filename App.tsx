// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "@/screens/Login";
import Registratin from './screens/Registration';
import Home from "@/screens/Home"
import Deposite from './screens/Deposite';
import MakePayment from './screens/MakePayment';
import WithDrawal from './screens/WithDrawal';
import { store } from '@/globalStore/app/store'
import { Provider } from 'react-redux'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Registration" component={Registratin} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown:true , title:"Welcome back Yao"}} />
          <Stack.Screen name="Deposite" component={Deposite} options={{ headerShown: true , title:"Deposite"}} />
          <Stack.Screen name="MakePayment" component={MakePayment} options={{ headerShown: true , title:"Make Payment"}} />
          <Stack.Screen name="WithDrawal" component={WithDrawal} options={{ headerShown: true , title:"Withdrawal"}} />



        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;