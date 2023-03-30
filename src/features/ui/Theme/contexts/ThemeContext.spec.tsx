import { render } from '@testing-library/react-native';
import { useContext } from 'react';
import { View, Text } from 'react-native';
import ThemeContext from './ThemeContext';

describe('ThemeContext', () => {
  it('should create a context with an empty object as initial value', () => {
    const TestComponent = () => {
      const themeContext = useContext(ThemeContext);
      return (
        <View>
          <Text>{JSON.stringify(themeContext)}</Text>
        </View>
      );
    };

    const { getByText } = render(<TestComponent />);
    expect(getByText('{}')).toBeDefined();
  });
});
