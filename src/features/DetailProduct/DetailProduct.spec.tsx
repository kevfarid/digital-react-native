import React from 'react';
import formatNumbers from '../../utils/formatNumbers';
import { fireEvent, render } from '../../utils/testing';
import DetailProduct from './DetailProduct';

describe('DetailProduct', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  } as any;

  const mockRoute = {
    params: {
      item: {
        product: 'Product Name',
        image: 'https://example.com/image.jpg',
        createdAt: '2022-03-30T14:30:00.000Z',
        points: 1000,
      },
    },
  };

  it('should render the product details', () => {
    const { getByText, getByTestId } = render(
      <DetailProduct navigation={mockNavigation} route={mockRoute} />
    );

    expect(getByText('Product Name')).not.toBeNull();
    expect(getByText('Detalles del producto')).not.toBeNull();
    expect(getByText('Comprado el 30 de marzo, 2022')).not.toBeNull();
    expect(getByText(`${formatNumbers(1000)} puntos`)).not.toBeNull();
  });

  it('should navigate back to the General screen when "Aceptar" button is pressed', () => {
    const { getByText } = render(
      <DetailProduct navigation={mockNavigation} route={mockRoute} />
    );

    const aceptarButton = getByText('Aceptar');

    fireEvent.press(aceptarButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('General');
  });
});
