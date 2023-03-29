import { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Button from '../ui/Button';
import { useTheme } from '../ui/Theme';
import ListItems from './components/ListItems';
import Points from './components/Points';
import { MODES } from './@types/Modes';
import { getPoints } from './services/points';
import ItemType from './@types/Item';
import { NavigationProp } from '@react-navigation/native';

export default function General({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [mode, setMode] = useState<MODES>(MODES.All);
  const [points, setPoints] = useState(0);
  const [items, setItems] = useState<ItemType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { theme, getStyle } = useTheme();
  const styles = createStyles(theme);

  const getData = useCallback(() => {
    getPoints(mode)
      .then(({ data, points }) => {
        setItems(data);
        setPoints(points);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [mode]);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [mode]);

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
      <Points points={points} />
      <Text
        style={getStyle('subtitle', {
          marginVertical: 20,
        })}
      >
        TUS MOVIMIENTOS
      </Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ListItems
          onRefresh={getData}
          items={items}
          navigation={navigation}
        />
      )}
      <View style={styles.buttons}>
        {mode !== MODES.All ? (
          <Button
            textButtonType='textButton2'
            onPress={() => setMode(MODES.All)}
          >
            Todos
          </Button>
        ) : (
          <>
            <Button onPress={() => setMode(MODES.Wins)} style={styles.button}>
              Ganados
            </Button>
            <Button onPress={() => setMode(MODES.Losses)} style={styles.button}>
              Perdidos
            </Button>
          </>
        )}
      </View>
    </View>
  );
}

const createStyles = (_: Theme) =>
  StyleSheet.create({
    title: {
      flexDirection: 'column',
      gap: 5,
    },
    container: {
      paddingTop: 60,
      flex: 1,
      paddingHorizontal: 20,
      paddingBottom: 40,
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
