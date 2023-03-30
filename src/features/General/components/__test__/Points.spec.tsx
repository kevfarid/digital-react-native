import React from 'react';
import { render } from '../../../../utils/testing';
import formatNumbers from '../../../../utils/formatNumbers';
import Points from '../Points';

describe('Points', () => {
  it('should render correctly', () => {
    const month = 'March';
    const points = 5000;

    const { getByText } = render(<Points month={month} points={points} />);
    const monthText = getByText(month);
    const pointsText = getByText(`${formatNumbers(points)} pts`);

    expect(monthText).toBeDefined();
    expect(pointsText).toBeDefined();
  });
});
