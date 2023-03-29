import {
  ScrollView,
  StyleSheet,
  SectionList,
  SectionListProps,
} from 'react-native';
import ItemType from '../@types/Item';
import { MODES } from '../@types/Modes';
import Item from './Item';

interface Props extends Omit<SectionListProps<ItemType>, 'sections'> {
  items: ItemType[];
}

export default function ListItems({ items, ...props }: Props) {
  const styles = createStyles();

  return (
    <SectionList
      style={styles.container}
      sections={items.map((item) => ({ data: [item] }))}
      keyExtractor={(item) => item.id}
      onRefresh={props.onRefresh}
      refreshing={false}
      renderItem={({ item }) => <Item styleName={styles.card} item={item} />}
    />
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
    },
    card: {
      marginBottom: 10,
    },
  });
