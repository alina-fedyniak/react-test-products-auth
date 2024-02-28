import React, { useEffect } from 'react';
import {
    StyledWrap,
    StyledBodyContainer,
} from './ProductsContainerStyled';
import {useAppDispatch, useAppState} from '../../../store/hooks';
import {selectProducts, selectProductsPagination} from '../feature/selectors';
import {getProducts} from "../feature/actionCreators";

const ProductsContainer = () => {
    const dispatch = useAppDispatch();
    const products = useAppState(selectProducts);
    const pagination = useAppState(selectProductsPagination);

    console.log(products)

    useEffect(() => {
        dispatch(getProducts({per_page: 6}));
    }, [dispatch, pagination.per_page]);

    return (
        <StyledWrap>
            <StyledBodyContainer>
              <div>ProductsContainer</div>
            </StyledBodyContainer>
        </StyledWrap>
    );
};

export default ProductsContainer;
