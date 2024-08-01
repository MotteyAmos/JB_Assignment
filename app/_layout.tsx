import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { store } from '@/globalStore/app/store'
import { Provider } from 'react-redux'
import { useColorScheme } from '@/hooks/useColorScheme';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ flex: 1 ,paddingTop:useSafeAreaInsets().top}}>
      <StatusBar
            animated={true}
            backgroundColor="white"
            barStyle='dark-content'
          // barStyle={statusBarStyle}
          // showHideTransition={statusBarTransition}
          // hidden={true}
          />
        <Stack>
          <Stack.Screen name="(auth)/index" options={{headerShown:false}}/>
          <Stack.Screen name="(auth)/Register" options={{headerShown:false}}/>

          <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
          <Stack.Screen name="+not-found" />
        </Stack>

      </SafeAreaProvider>


    </Provider>

  );
}
