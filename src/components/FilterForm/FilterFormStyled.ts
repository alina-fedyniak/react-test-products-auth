import styled from 'styled-components';
import {pickThemeFontStyles} from "../../theme";

export const StyledWrap = styled.div`
  form {
    label {
          ${pickThemeFontStyles('16', '24', 'BOLD')};
    }
    input {
          padding: 0.5rem 0 0.5rem 0.5rem;
          margin: 0.4rem 0 0.4rem 0.4rem;
          border-radius: 0.3rem;
    }
    button {
          padding: 0.5rem 1rem;
          margin: 0.4rem 0.6rem 1rem 0;
          border-radius: 0.3rem;
    }
    input[type="search"] {
          width: 35%;
    }
  }
`;
