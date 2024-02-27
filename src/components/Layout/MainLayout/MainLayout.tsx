import React, { ReactNode } from 'react';
import { StyledLayout } from '../Styles/LayoutStyles';
import MainLayoutContent from '../MainLayoutContent/MainLayoutContent';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout): JSX.Element => (
  <StyledLayout>
    <MainLayoutContent>{children}</MainLayoutContent>
  </StyledLayout>
);

export default MainLayout;
