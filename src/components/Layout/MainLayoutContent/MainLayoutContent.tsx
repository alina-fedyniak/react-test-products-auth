import React, { ReactNode } from 'react';
import { StyledContent } from '../Styles/LayoutStyles';

interface IMainLayout {
  children: ReactNode;
}

const MainLayoutContent = ({ children }: IMainLayout): JSX.Element => (
  <>
    <StyledContent>{children}</StyledContent>
  </>
);

export default MainLayoutContent;
