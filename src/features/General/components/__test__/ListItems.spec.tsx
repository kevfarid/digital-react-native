import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { render } from '../../../../utils/testing';
import ListItems from '../ListItems';
import ItemType from '../../@types/Item';

describe('ListItems', () => {
  it('should render a list of items', () => {
    // Arrange
    const items: ItemType[] = [
      {
        id: '1',
        product: 'Product 1',
        createdAt: '2022-01-01',
        points: 100,
        image: 'https://example.com/image.jpg',
        is_redemption: false,
      },
      {
        id: '2',
        product: 'Product 2',
        createdAt: '2022-02-01',
        points: 200,
        image: 'https://example.com/image.jpg',
        is_redemption: true,
      },
      {
        id: '3',
        product: 'Product 3',
        createdAt: '2022-03-01',
        points: 300,
        image: 'https://example.com/image.jpg',
        is_redemption: false,
      },
    ];

    const onPress = jest.fn();
    const navigate = jest.fn();
    const { getByText } = render(
      <ListItems
        items={items}
        onPress={onPress}
        navigation={{ navigate }}
        onRefresh={() => {}}
      />
    );

    // Act
    const firstItem = items[0];
    const firstItemElement = getByText(firstItem.product);
    fireEvent.press(firstItemElement);

    // Assert
    expect(getByText(firstItem.product)).toBeDefined();
    expect(navigate).toHaveBeenCalledWith('DetailProduct', { item: firstItem });
  });
});
