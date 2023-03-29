import { API_URL } from '../../../constants';
import { MODES } from '../@types/Modes';
import Item from '../@types/Item';

export async function getPoints(mode: MODES) {
  const data = (await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data)) as Item[];

  const points = data.reduce((acc, item) => {
    const value = item.is_redemption ? -item.points : item.points;
    return acc + value;
  }, 0);

  const filteredData = data.filter((item) => {
    if (mode === MODES.All) {
      return true;
    }

    const isModeWins = mode === MODES.Wins;
    const value = isModeWins
      ? item.is_redemption === false
      : item.is_redemption === true;

    return value;
  });

  return {
    data: filteredData,
    points,
  };
}
