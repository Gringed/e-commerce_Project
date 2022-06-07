import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from '@mui/material';
import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";

const PrimaryColor = "white";
const SecondaryColor = "pink";
const TertiaryColor = "#18191a";

const Container = styled.div`
  background: ${TertiaryColor};
  color: ${PrimaryColor};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  ${mobile({padding: "10px 5px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({display: "none"})}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px 15px;
  border: 2px solid ${SecondaryColor};
  border-radius: 10px;
`;
const Input = styled.input`
  border: none;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  background:none;
  ${tablet({width: "70px"})}
  color: ${PrimaryColor};
  &:focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  ${mobile({justifyContent: "flex-start"})}
`;

const Logo = styled.h1`
  color: ${PrimaryColor};
  border-bottom: 5px solid ${SecondaryColor};
  ${mobile({fontSize: "20px", marginLeft: "10px"})}
  ${tablet({fontSize: "23px", marginLeft: "10px"})}
`;
const Right = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({justifyContent: "space-around", flex: "2"})}
`;
const MenuItem = styled.div`
    font-size: 14px;
    margin-left: 25px;
    cursor: pointer;
    ${mobile({fontSize: "12px", marginLeft: "5px"})};
    ${tablet({fontSize: "13px", marginLeft: "10px"})};
    transition: all 0.2s ease-in;
    &>a{
      color: ${PrimaryColor};
      transition: all 0.2s ease-in;
      &:hover{
        color: ${SecondaryColor};
      }
    }
    &:hover {
        color: ${SecondaryColor};
    }
    
`

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input type={"text"} placeholder="Rechercher . ."/>
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Mooney</Logo>
        </Center>
        <Right>
        <MenuItem>
        <Link to="/register">
            Register
            </Link>
        </MenuItem>
        <MenuItem>
        <Link to="/login">
            Login
            </Link>
        </MenuItem>
        
        <MenuItem>
        <Link to="/cart">
        <Badge badgeContent={quantity} color="error">
            <ShoppingCartOutlined />
          </Badge>
          </Link>
        </MenuItem>
        
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
