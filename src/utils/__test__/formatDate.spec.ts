import formatDate from '../formatDate';

describe('formatDate', () => {
  it('returns a formatted date in Spanish', () => {
    const date = '2022-04-01T12:34:56.789Z';

    const formattedDate = formatDate(date);

    expect(formattedDate).toBe('1 de abril, 2022');
  });
});