import React from "react";
import styled from "styled-components";
import { categories } from "../data";

const PrimaryColor = "white";
const SecondaryColor = "pink";
const TertiaryColor = "#18191a";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Item = styled.div`
  margin: 5px;
  flex: 1;
  height: 65vh;
  position: relative;
  border: 1px solid whitesmoke;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
const InfoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;  
    
`;
const Title = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  color: ${TertiaryColor};
  background: ${PrimaryColor};
  width:100%;
  opacity: 0.75;
  padding: 10px 0;
`;
const Button = styled.button`
    padding: 15px;
    font-family: 'Montserrat', sans-serif;
    background:${SecondaryColor};
    color: ${TertiaryColor};
    border: none;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    opacity: 1;
    transition: all 0.2s ease-in;
    &:hover{
    color: ${SecondaryColor};
    background: ${TertiaryColor};
    transform: scale(1.1);
  }
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Item key={item.id}>
          <Image src={item.img} />
          <InfoContainer>
            <Title>{item.title}</Title>
            <Button>Voir plus</Button>
          </InfoContainer>
        </Item>
      ))}
    </Container>
  );
};

export default Categories;
