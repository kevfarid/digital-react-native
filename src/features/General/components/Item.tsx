import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import IconNext from '../../ui/Icons/Next';
import { useTheme } from '../../ui/Theme';
import ItemType from '../@types/Item';

interface Props extends TouchableOpacityProps {
  item: ItemType;
  styleName?: StyleProp<ViewStyle>;
}

export default function Item({ item, styleName, ...props }: Props) {
  const { getStyle, theme } = useTheme();
  const styles = createStyles();

  return (
    <TouchableOpacity style={[styles.cotainer, styleName]} {...props}>
      <View style={styles.pricipalContent}>
        <Image source={{ uri: item.image }} style={styles.tinyImage} />
        <View style={styles.description}>
          <Text
            style={getStyle('subtitle', {
              color: theme.colors.text.black,
            })}
          >
            {item.product}
          </Text>
          <Text
            style={getStyle('text', {
              fontSize: 12,
            })}
          >
            {item.createdAt}
          </Text>
        </View>
      </View>
      <View style={styles.points}>
        <Text
          style={getStyle('text2', {
            fontWeight: 800,
            color: item.is_redemption
              ? theme.colors.status.error
              : theme.colors.status.success,
          })}
        >
          {item.is_redemption ? '-' : '+'}
        </Text>
        <Text
          style={getStyle('text2', {
            fontWeight: 800,
          })}
        >
          {item.points}
        </Text>
      </View>
      <IconNext />
    </TouchableOpacity>
  );
}

const createStyles = () =>
  StyleSheet.create({
    cotainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    pricipalContent: {
      flexDirection: 'row',
      gap: 10,
    },
    tinyImage: {
      width: 55,
      height: 55,
      borderRadius: 10,
    },
    description: {
      justifyContent: 'space-around',
      paddingVertical: 3,
    },
    points: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
    },
  });
