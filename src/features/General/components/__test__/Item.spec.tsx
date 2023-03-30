import React from 'react';
import { render } from '../../../../utils/testing';
import Item from '../Item';
import ItemType from '../../@types/Item';

describe('Item', () => {
  it('should render item information with negative points', () => {
    // Arrange
    const item: ItemType = {
      id: '1',
      product: 'Product 1',
      createdAt: '2022-03-30T14:30:00.000Z',
      points: 100,
      is_redemption: true,
      image: 'https://example.com/image.jpg',
    };

    // Act
    const { getByText } = render(<Item item={item} />);

    // Assert
    expect(getByText(item.product)).toBeDefined();
    expect(getByText('30 de marzo, 2022')).toBeDefined();
    expect(getByText('-')).toBeDefined();
    expect(getByText('100')).toBeDefined();
  });

  it('should render item information with positive points', () => {
    // Arrange
    const item: ItemType = {
      id: '1',
      product: 'Product 1',
      createdAt: '2022-03-30T14:30:00.000Z',
      points: 100,
      is_redemption: false,
      image: 'https://example.com/image.jpg',
    };

    // Act
    const { getByText } = render(<Item item={item} />);

    // Assert
    expect(getByText(item.product)).toBeDefined();
    expect(getByText('30 de marzo, 2022')).toBeDefined();
    expect(getByText('+')).toBeDefined();
    expect(getByText('100')).toBeDefined();
  });
});
