import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import General from './src/features/General';
import Button from './src/features/ui/Button';
import { ThemeProvider } from './src/features/ui/Theme';
import defaultTheme from './src/features/ui/Theme/defaultTheme';

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <General />
        <StatusBar style='auto' />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTheme.colors.background,
    height: '100%',
    width: '100%',
  },
});
