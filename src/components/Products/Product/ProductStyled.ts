import styled from 'styled-components';
import {pickThemeFontStyles} from "../../../theme";

export const StyledWrap = styled.div`
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.2);
  max-width: 21rem;
  border-radius: 1rem;
  padding: 2rem;
  a {
    text-decoration: none;
  }
`;

export const StyledImg = styled.div`
  img {
    width: 100%;
  }
`;

export const StyledTitle = styled.div`
  ${pickThemeFontStyles('16', '24', 'BOLD')};
`;

export const StyledPrice = styled.div`
  ${pickThemeFontStyles('14', '24', 'BOLD')};
`;
