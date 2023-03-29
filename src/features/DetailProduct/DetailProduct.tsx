import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import ItemType from '../General/@types/Item';
import Button from '../ui/Button';
import { useTheme } from '../ui/Theme';
import { NavigationProp } from '@react-navigation/native';
import formatNumbers from '../../utils/formatNumbers';
import formatDate from '../../utils/formatDate';

export default function DetailProduct({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) {
  const [item, setItem] = useState<ItemType | null>(null);

  useEffect(() => {
    const { item } = route.params;
    setItem(item);
  }, []);

  const { theme, getStyle } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      {item && (
        <>
          <View style={styles.header}>
            <Text
              style={getStyle('title', {
                fontSize: 24,
              })}
            >
              {item.product}
            </Text>
          </View>
          <ScrollView style={styles.content}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={getStyle('subtitle')}>Detalles del producto</Text>
              <Text
                style={getStyle('text2', {
                  fontWeight: 800,
                })}
              >
                Comprado el {formatDate(item.createdAt)}
              </Text>
              <Text style={getStyle('subtitle')}>
                Con esta compra acumulaste
              </Text>
              <Text
                style={getStyle('text2', {
                  fontWeight: 800,
                  fontSize: 24,
                  marginTop: 12,
                })}
              >
                {formatNumbers(item.points)} puntos
              </Text>
            </View>
          </ScrollView>
          <View style={styles.button}>
            <Button
              textButtonType='textButton2'
              onPress={() => navigation.navigate('General')}
            >
              Aceptar
            </Button>
          </View>
        </>
      )}
    </View>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 40,
      justifyContent: 'space-between',
    },
    header: {
      paddingTop: 100,
      paddingHorizontal: 20,
      paddingBottom: 20,
      backgroundColor: theme.colors.header.background,
    },
    content: {
      paddingTop: 20,
      paddingHorizontal: 20,
      flex: 1,
    },
    image: {
      alignSelf: 'center',
      width: Dimensions.get('window').width - 40,
      height: Dimensions.get('window').width - 40,
      borderRadius: 10,
    },
    details: {
      gap: 20,
      marginTop: 32,
    },
    button: {
      paddingHorizontal: 20,
    },
  });
