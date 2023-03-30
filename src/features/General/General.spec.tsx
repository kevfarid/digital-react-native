import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { render } from '../../utils/testing';
import General from './General';

const mockNavigation = {
  navigate: jest.fn(),
} as any;

describe('General', () => {
  it('should render the welcome message and points', () => {
    const { getByText } = render(<General navigation={mockNavigation} />);
    expect(getByText('Bienvenido de vuelta!')).not.toBeNull();
    expect(getByText(`Ruben Rodriguez`)).not.toBeNull();
  });

  it('should render the "Todos" button not default', () => {
    const { getByText } = render(<General navigation={mockNavigation} />);
    expect(getByText('Ganados')).not.toBeNull();
    expect(getByText('Perdidos')).not.toBeNull();
  });

  it('should switch between "Todos", "Ganados" and "Perdidos" modes when clicking the buttons', async () => {
    const { getByText } = render(
      <General navigation={mockNavigation} />
    );
    const ganadosButton = getByText('Ganados');
    let perdidosButton = getByText('Perdidos');

    fireEvent.press(ganadosButton);

    let todosButton;

    await waitFor(() => {
      todosButton = getByText('Todos');
      expect(todosButton).not.toBeNull();
    });

    fireEvent.press(todosButton);

    await waitFor(() => {
      perdidosButton = getByText('Perdidos');
      expect(perdidosButton).not.toBeNull();
    });

    fireEvent.press(perdidosButton);

    await waitFor(() => {
      todosButton = getByText('Todos');
      expect(todosButton).not.toBeNull();
    });
  });
});
