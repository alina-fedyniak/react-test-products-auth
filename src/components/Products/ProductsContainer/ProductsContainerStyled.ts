import styled from 'styled-components';
import {pickThemeColor, DEVICES} from '../../../theme';

export const StyledWrap = styled.div`
  color: ${pickThemeColor('ECLIPSE')};
  margin: 1rem;
  
    @media screen and ${DEVICES.TABLET} {
      margin-top: 3.1rem;
    }
    @media screen and ${DEVICES.LAPTOP_S} {
      margin: 3.1rem 0 0 0;
    }
`;

export const StyledBodyContainer = styled.div`
  display: grid;
  grid-column-gap: 2.8rem;
  grid-row-gap: 2.8rem;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 3.3rem;

  @media screen and ${DEVICES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
