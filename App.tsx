import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/features/ui/Button';
import { ThemeProvider } from './src/features/ui/Theme';

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button textButtonType='textButton2'>Hola</Button>
        <StatusBar style='auto' />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
