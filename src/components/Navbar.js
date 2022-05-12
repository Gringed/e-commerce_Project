import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from '@mui/material'; 
import React from "react";
import styled from "styled-components";

const PrimaryColor = "#333333";
const Container = styled.div`
  height: 60px;
  color: ${PrimaryColor};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
  border: 1px solid ${PrimaryColor};
  border-radius: 10px;
`;
const Input = styled.input`
  border: none;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  &:focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.h1`
  color: ${PrimaryColor};
  border-bottom: 5px solid pink;
`;
const Right = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  justify-content: space-around;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input type={"text"} />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MONEY.D.ENGINE</Logo>
        </Center>
        <Right>
        <MenuItem>
            REGISTER
        </MenuItem>
        <MenuItem>
            LOGIN
        </MenuItem>
        <MenuItem>
        <Badge badgeContent={4} color="error">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
