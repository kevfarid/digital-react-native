import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ThemeProvider from './ThemeProvider';
import ThemeContext from '../contexts/ThemeContext';
import defaultTheme from '../defaultTheme';
import { Text, Button } from 'react-native';

describe('ThemeProvider', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Text testID='child'>Hello world</Text>
      </ThemeProvider>
    );

    expect(getByTestId('child')).toBeTruthy();
  });
});
