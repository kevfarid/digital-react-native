import { Pressable, Text, PressableProps, StyleSheet } from 'react-native';
import { useTheme } from '../Theme';

interface ButtonProps extends PressableProps {
  textButtonType?: 'textButton' | 'textButton2';
}

export default function Button({
  textButtonType = 'textButton',
  ...oherProps
}: ButtonProps) {
  const { theme, getStyle } = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      padding: 14,
      borderRadius: 10,
      width: '100%',
      alignItems: 'center',
      maxWidth: 353,
    },
  });

  return (
    <Pressable {...oherProps} style={styles.button}>
      <Text style={getStyle(textButtonType)}>Button</Text>
    </Pressable>
  );
}
