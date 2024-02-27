import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ProductsContainer from "../components/Products/ProductsContainer/ProductsContainer";

export const RouteNav = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <HomePage/>
                }
            />
            <Route
                path='/products'
                element={
                    <ProductsContainer/>
                }
            />
        </Routes>
    );
};