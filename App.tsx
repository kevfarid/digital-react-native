import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import General from './src/features/General';
import DetailProduct from './src/features/DetailProduct';
import { ThemeProvider } from './src/features/ui/Theme';
import defaultTheme from './src/features/ui/Theme/defaultTheme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='General' component={General} />
          <Stack.Screen name='DetailProduct' component={DetailProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
