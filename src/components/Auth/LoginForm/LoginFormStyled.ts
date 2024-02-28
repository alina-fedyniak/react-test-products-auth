import styled from 'styled-components';

export const StyledWrap = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 35%;
    box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.2);
    padding: 1.5rem 1.5rem;
    border-radius: 1rem;
    
    input, button {
      padding: 0.5rem 0;
      margin: 0.4rem 0;
    }
  }
`;
