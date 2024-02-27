export type HEXColor = string;

export const COLORS = {
  BLACK: '#000000',
  BLACK_LIGHT: '#7c7c7d',
  WHITE: '#ffffff',
  HOVER_BLUE_PRIMARY: '#2c75d4',
  BLUE_PRIMARY: '#0A55C6',
  RED: '#CC2D4A',
  YELLOW: '#FDBA37',
  GREEN: '#219653',
  WHISPER: '#EAEAEA',
  ECLIPSE: '#363636',
};

export const FONT_WEIGHTS = {
  BOLD: 700,
  SEMI_BOLD: 600,
  NORMAL: 400,
};

export const FONT_SIZES = {
  '12': '0.75rem',
  '14': '0.875rem',
  '16': '1rem',
  '18': '1.125rem',
  '20': '1.25rem',
  '22': '1.375rem',
  '24': '1.5rem',
  '26': '1.6rem',
  '28': '1.75rem',
  '30': '1.875rem',
  '40': '2.5rem',
  '46': '2.9rem',
  '56': '3.5rem',
};

export const MOBILE_LAYOUT_MAX_WIDTH = 1024;

const SCREEN_SIZES = {
  MOBILE_S: '320px',
  MOBILE: '375px',
  MOBILE_L: '425px',
  MOBILE_XL: '480px',
  TABLET_S: '768px',
  TABLET: '834px',
  LAPTOP_S: '1025px',
  LAPTOP_M: '1366px',
  LAPTOP: '1440px',
  DESKTOP: '1920px',
  DESKTOP_L: '2560px',
};

export const DEVICES = {
  MOBILE_S: `(min-width: ${SCREEN_SIZES.MOBILE_S})`,
  MOBILE: `(min-width: ${SCREEN_SIZES.MOBILE})`,
  MOBILE_L: `(min-width: ${SCREEN_SIZES.MOBILE_L})`,
  MOBILE_XL: `(min-width: ${SCREEN_SIZES.MOBILE_XL})`,
  TABLET_S: `(min-width: ${SCREEN_SIZES.TABLET_S})`,
  TABLET: `(min-width: ${SCREEN_SIZES.TABLET})`,
  LAPTOP_S: `(min-width: ${SCREEN_SIZES.LAPTOP_S})`,
  LAPTOP_M: `(min-width: ${SCREEN_SIZES.LAPTOP_M})`,
  LAPTOP: `(min-width: ${SCREEN_SIZES.LAPTOP})`,
  DESKTOP: `(min-width: ${SCREEN_SIZES.DESKTOP})`,
  DESKTOP_L: `(min-width: ${SCREEN_SIZES.DESKTOP_L})`,
};
