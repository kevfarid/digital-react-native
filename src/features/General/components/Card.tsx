import React from 'react';
import { View, Text, StyleSheet, StyleSheetProperties } from 'react-native';
import { useTheme } from '../../ui/Theme';

interface CardProps {
  month?: string;
  points: number;
  style?: StyleSheetProperties;
}

export default function Card({ month, style, points }: CardProps) {
  const { theme, getStyle } = useTheme();
  const styles = createStyles(theme);

  const monthFormat = new Date().toLocaleString('default', { month: 'long' });
  const pointsFormat = points.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'USD',
  }).replace('US$', '');

  return (
    <View style={styles.card}>
      <Text style={getStyle('textButton2')}>{month || monthFormat}</Text>
      <Text
        style={getStyle('title', {
          marginTop: 7,
          color: '#fff',
          fontSize: 32,
          alignSelf: 'center',
        })}
      >
        {pointsFormat} pts
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
