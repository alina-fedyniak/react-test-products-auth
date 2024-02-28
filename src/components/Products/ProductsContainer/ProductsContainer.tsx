import React, { useEffect } from 'react';
import {
    StyledWrap,
    StyledBodyContainer,
} from './ProductsContainerStyled';
import {useAppDispatch, useAppState} from '../../../store/hooks';
import {selectProducts, selectProductsPagination} from '../feature/selectors';
import {getProducts} from '../feature/actionCreators';
import Product from '../Product/Product';
import FilterForm from '../../FilterForm/FilterForm';

const ProductsContainer = () => {
    const dispatch = useAppDispatch();
    const products = useAppState(selectProducts);
    const pagination = useAppState(selectProductsPagination);

    useEffect(() => {
        dispatch(getProducts({per_page: 6}));
    }, [dispatch, pagination.per_page]);

    return (
        <StyledWrap>
            <FilterForm/>
            <StyledBodyContainer>
                {products && (
                    products?.map(item => {
                        return (
                            <Product
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                thumbnail={item.thumbnail}
                            />
                        )
                    })
                )}
            </StyledBodyContainer>
        </StyledWrap>
    );
};

export default ProductsContainer;
