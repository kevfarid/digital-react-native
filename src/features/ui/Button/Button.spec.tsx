import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { render } from '../../../utils/testing';

import Button from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    // arrange
    const { getByText } = render(<Button>Click me!</Button>);

    // act
    const button = getByText('Click me!');

    // assert
    expect(button).toBeDefined();
  });

  it('should call onPress function when clicked', () => {
    // arrange
    const onPress = jest.fn();
    const { getByText } = render(<Button onPress={onPress}>Click me!</Button>);

    // act
    const button = getByText('Click me!');

    // assert
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });

  it('should render text button style correctly', () => {
    // arrange
    const { getByText } = render(
      <Button textButtonType='textButton'>Click me!</Button>
    );

    // act
    const button = getByText('Click me!');

    // assert
    expect(button.props.style.backgroundColor).toBeUndefined();
    expect(button.props.style.padding).toBeUndefined();
    expect(button.props.style.borderRadius).toBeUndefined();
  });

  it('should render text button 2 style correctly', () => {
    // arrange
    const { getByText } = render(
      <Button textButtonType='textButton2'>Click me!</Button>
    );

    // act
    const button = getByText('Click me!');

    // assert
    expect(button.props.style.backgroundColor).toBeUndefined();
    expect(button.props.style.padding).toBeUndefined();
    expect(button.props.style.borderRadius).toBeUndefined();
  });
});
