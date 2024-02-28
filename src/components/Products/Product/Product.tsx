import React from 'react';
import {
    StyledWrap,
    StyledImg,
    StyledTitle,
    StyledPrice
} from './ProductStyled';

export interface IProduct {
    id?: number;
    title?: string;
    price?: string;
    thumbnail?: string;
}

const Product = ({id, title, price, thumbnail}: IProduct) => {

    return (
        <StyledWrap>
            <StyledImg>Product{thumbnail}</StyledImg>
            <StyledTitle>{title}</StyledTitle>
            <StyledPrice>{price}</StyledPrice>
        </StyledWrap>
    );
}

export default Product;
