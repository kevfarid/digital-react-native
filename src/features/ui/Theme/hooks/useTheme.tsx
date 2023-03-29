import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Generic from '../../../../utils/@types/Generic';
import ThemeContext from '../contexts/ThemeContext';

export default function useTheme() {
  const { theme } = useContext(ThemeContext);

  const getStyle = (key: string, styles?: Generic<string>) => {
    const components: {
      [key: string]: {
        [key: string]: any;
      };
    } = theme?.components || {};

    const newStyles = Object.assign({}, components[key], styles);

    const style = StyleSheet.create({
      ...newStyles,
    });

    return style;
  };

  return { theme, getStyle };
}
