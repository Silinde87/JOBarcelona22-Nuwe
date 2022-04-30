import { theme } from '../../themes/theme';

export const getColorsFromTheme = (): object => {
  const options = Object.values(theme);
  return options;
};
