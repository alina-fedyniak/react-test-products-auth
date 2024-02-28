import React from 'react';
import styled from 'styled-components';
import LoginForm from "../../components/Auth/LoginForm/LoginForm";

const StyledWrapper = styled.div`
  text-align: center;
`;

const HomePage = () => {

    return (
        <StyledWrapper>
            <h1>myHomePage</h1>
            <LoginForm/>
        </StyledWrapper>
    )
}

export default HomePage;