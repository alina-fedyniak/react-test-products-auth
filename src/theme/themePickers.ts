import { css } from 'styled-components';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, HEXColor } from './theme';

export const pickThemeColor = (colorName: keyof typeof COLORS): HEXColor =>
  COLORS[colorName] || COLORS.BLACK;

export const pickThemeFontSize = (size: keyof typeof FONT_SIZES): string =>
  FONT_SIZES[size];

export const pickThemeFontStyles = (
  size: keyof typeof FONT_SIZES,
  height: keyof typeof FONT_SIZES,
  weight: keyof typeof FONT_WEIGHTS = 'NORMAL',
) => css`
  font-size: ${FONT_SIZES[size]};
  line-height: ${FONT_SIZES[height]};
  font-weight: ${FONT_WEIGHTS[weight]};
`;
