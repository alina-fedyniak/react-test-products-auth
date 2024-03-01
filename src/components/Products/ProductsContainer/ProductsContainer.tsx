import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    StyledWrap,
    StyledBodyContainer,
} from './ProductsContainerStyled';
import {useAppDispatch, useAppState} from '../../../store/hooks';
import {selectProducts, selectProductsPagination} from '../feature/selectors';
import {getProducts} from '../feature/actionCreators';
import Product from '../Product/Product';
import FilterForm from '../../FilterForm/FilterForm';
import {PaginationFields} from '../../../models/pagination.model';
import {StyledTitle} from "../Product/ProductStyled";

const ProductsContainer = () => {
    const dispatch = useAppDispatch();
    const products = useAppState(selectProducts);
    const pagination = useAppState(selectProductsPagination);
    const [page, setPage] = useState(1);
    const hasFetchedProducts = useRef(false);

    useEffect(() => {
        if (!hasFetchedProducts.current && pagination) {
            dispatch(getProducts({ per_page: pagination?.per_page }));
            hasFetchedProducts.current = true;
        }
    }, [dispatch, pagination?.per_page]);

    const handleShowMore = () => {
        if (pagination && pagination.last_page >= page + 1) {
            dispatch(getProducts({ per_page: pagination?.per_page,[PaginationFields.PAGE]: page + 1}));
            setPage((prev)=> prev + 1);
        }
    };

    return (
        <StyledWrap>
            <Link to={`/`}>
                <StyledTitle>Login</StyledTitle>
            </Link>
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
            <button
                onClick={handleShowMore}
            >
                showMore
            </button>
        </StyledWrap>
    );
};

export default ProductsContainer;
