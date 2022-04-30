import { getColorsFromTheme } from './getColorsFromTheme';
import { theme } from './../../themes/theme';

describe('getColorsFromTheme test set', () => {
  test('Should return an array', () => {
    const colors = getColorsFromTheme();

    expect(typeof colors).toBe('object');
  });

  test('Should have length greater than 0', () => {
    const colors = getColorsFromTheme();

    expect(colors.length).toBeGreaterThan(0);
  });

  test('Should include all colors from theme', () => {
    const colors = getColorsFromTheme();

    expect(colors.length).toBe(Object.keys(theme).length);

    Object.values(theme).forEach((color, index) => expect(colors[index] === color));
  });
});
