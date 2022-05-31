import React from 'react'
import styled from 'styled-components'
import { productsList } from '../data';
import Product from './Product';

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
        {productsList.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products
