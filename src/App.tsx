import React, {useEffect} from 'react';
import MainLayout from './components/Layout/MainLayout/MainLayout';
import {RouteNav} from './routing/RouteNav';
import {useAppDispatch, useAppState} from './store/hooks';
import {selectIsAuthorised} from './components/Auth';
import {logIn} from './components/Auth/feature/authSlice';

const AppRoot = () => {
    const dispatch = useAppDispatch();
    const isLogin = useAppState(selectIsAuthorised);

    useEffect(() => {
        if (localStorage.getItem('auth') === 'true' && !isLogin) {
            dispatch(logIn({status: true}))
        }
    }, [dispatch, isLogin]);

  return (
      <>
          <MainLayout>
              <RouteNav/>
          </MainLayout>
      </>
  );
};

export default (AppRoot);
