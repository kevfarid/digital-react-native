import React from 'react';
import { View, Text, StyleSheet, StyleSheetProperties } from 'react-native';
import { useTheme } from '../../ui/Theme';
import  formatNumbers from '../../../utils/formatNumbers';

interface CardProps {
  month?: string;
  points: number;
  style?: StyleSheetProperties;
}

export default function Points({ month, style, points }: CardProps) {
  const { theme, getStyle } = useTheme();
  const styles = createStyles(theme);

  const monthFormat = new Date().toLocaleString('es', { month: 'long' });

  return (
    <View style={styles.card}>
      <Text
        style={getStyle('textButton2', {
          textTransform: 'capitalize',
        })}
      >
        {month || monthFormat}
      </Text>
      <Text
        style={getStyle('title', {
          marginTop: 7,
          color: '#fff',
          fontSize: 32,
          alignSelf: 'center',
        })}
      >
        {formatNumbers(points)} pts
      </Text>
    </View>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.primary,
      width: '100%',
      height: 143,
      borderRadius: 20,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.9,
      shadowRadius: 4,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
  });
