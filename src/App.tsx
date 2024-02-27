import React from 'react';
import MainLayout from './components/Layout/MainLayout/MainLayout';
import {RouteNav} from "./routing/RouteNav";

const AppRoot = () => {

  return (
      <>
          <MainLayout>
              <RouteNav/>
          </MainLayout>
      </>
  );
};

export default (AppRoot);
