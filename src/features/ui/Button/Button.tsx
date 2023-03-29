import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from '../Theme';

interface ButtonProps extends TouchableOpacityProps {
  textButtonType?: 'textButton' | 'textButton2';
  children: string;
  style?: TouchableOpacityProps['style'];
}

export default function Button({
  textButtonType = 'textButton',
  children,
  ...oherProps
}: ButtonProps) {
  const { theme, getStyle } = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      padding: 14,
      borderRadius: 10,
      alignItems: 'center',
      width: '100%',
    },
  });

  return (
    <TouchableOpacity {...oherProps} style={[styles.button, oherProps.style]}>
      <Text style={getStyle(textButtonType)}>{children}</Text>
    </TouchableOpacity>
  );
}
