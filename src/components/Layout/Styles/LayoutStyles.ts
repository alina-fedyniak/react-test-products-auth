import styled from 'styled-components';
import { pickThemeColor } from '../../../theme';

export const StyledLayout = styled.div`
  min-height: 100vh;
  background: ${pickThemeColor('WHITE')};
`;

export const StyledContent = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;
