import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const PrimaryColor = "whitesmoke";
const SecondaryColor = "pink";
const TertiaryColor = "#18191a";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${PrimaryColor};
  position: relative;
  ${mobile({margin: "5px 0 5px 0"})}
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  background: ${SecondaryColor};
  opacity:0.5;
`;
const Image = styled.img`
z-index: 2;
  height: 75%;
`;
const Info = styled.div`
  width:100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  background: rgba(24, 25, 26, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.2s ease-in;
  &:hover{
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 45px;
  height: 45px;
  border-radius:50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${SecondaryColor};
  margin: 10px;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover{
    color: ${SecondaryColor};
    background: ${TertiaryColor};
    transform: scale(1.1);
  }
  `;

const Product = ({item}) => {
  return (
    <Container>
        <Circle />
          <Image src={item.img}/>
          <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <SearchOutlined />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
    </Container>
  )
}

export default Product
