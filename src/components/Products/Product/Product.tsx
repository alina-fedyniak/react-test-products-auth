import React from 'react';
import { Link } from 'react-router-dom';
import {
    StyledWrap,
    StyledImg,
    StyledTitle,
    StyledPrice
} from './ProductStyled';

export interface IProduct {
    id: number;
    title: string;
    price: string;
    thumbnail: string;
}

const Product = ({id, title, price, thumbnail}: IProduct) => {

    return (
        <StyledWrap>
            <Link to={`/products/${id}`}>
                <StyledImg>
                    <img src={thumbnail} alt="Thumbnail"/>
                </StyledImg>
            </Link>
            <Link to={`/products/${id}`}>
                <StyledTitle>{title}</StyledTitle>
            </Link>
            <StyledPrice>{price} $</StyledPrice>
        </StyledWrap>
    );
}

export default Product;
