import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Button from '../ui/Button';
import { useTheme } from '../ui/Theme';
import Card from './components/Card';

const enum ModeTypes {
  all = 'all',
  wins = 'wins',
  loses = 'loses',
}

export default function General() {
  const [mode, setMode] = useState<ModeTypes>(ModeTypes.wins);

  const { theme, getStyle } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={getStyle('title')}>Bienvenido de vuelta!</Text>
        <Text style={getStyle('text2')}>Ruben Rodriguez</Text>
      </View>
      <Text
        style={getStyle('subtitle', {
          marginVertical: 20,
        })}
      >
        TUS PUNTOS
      </Text>
      <Card points={10000} />
      <Text
        style={getStyle('subtitle', {
          marginVertical: 20,
        })}
      >
        TUS MOVIMIENTOS
      </Text>
      <View style={styles.buttons}>
        {mode !== ModeTypes.all ? (
          <Button
            textButtonType='textButton2'
            onPress={() => setMode(ModeTypes.all)}
          >
            Todos
          </Button>
        ) : (
          <>
            <Button
              onPress={() => setMode(ModeTypes.wins)}
              style={styles.button}
            >
              Ganados
            </Button>
            <Button
              onPress={() => setMode(ModeTypes.loses)}
              style={styles.button}
            >
              Perdidos
            </Button>
          </>
        )}
      </View>
    </View>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    title: {
      flexDirection: 'column',
      gap: 5,
    },
    container: {
      paddingTop: 60,
      paddingHorizontal: 20,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 13,
      marginTop: 43,
    },
    button: {
      flex: 1,
    },
  });
