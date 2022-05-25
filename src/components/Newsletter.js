import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive';

const PrimaryColor = "whitesmoke";
const SecondaryColor = "pink";
const TertiaryColor = "#18191a";

const Container = styled.div`
    margin: 20px 0 0 0;
  display: flex;
  height: 50vh;
  background: ${PrimaryColor};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`
const Title = styled.h1`
    text-transform: uppercase;
    font-size: 70px;
    border-bottom: 5px solid ${SecondaryColor};
    color: ${TertiaryColor};
    ${mobile({fontSize: "50px"})}
`
const Description = styled.div`
    font-size: 24px;
    letter-spacing: 2px;
    font-weight: 200;
    ${mobile({textAlign: "center"})}
    ${tablet({textAlign: "center"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 45px;
    display: flex;
    justify-content: center;
    margin: 20px;
    ${mobile({width: "90%"})}
    ${tablet({width: "90%"})}
`
const Input = styled.input`
    font-family: 'Montserrat',sans-serif;
    width: 100%;
    border: none;
    padding: 15px;
    font-size: 15px;
    flex: 8;
    &:focus{
        outline: none;
    }
`
const Button = styled.button`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${SecondaryColor};
    border: 2px solid ${SecondaryColor};
    color: ${PrimaryColor};
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover{
        color: ${SecondaryColor};
        background: ${TertiaryColor};
        border: 2px solid ${TertiaryColor};
    }
`

const Newsletter = () => {
  return (
    <Container>
        <Title>S'abonner</Title>
        <Description>Pour profiter de tout nos nouveaux produits</Description>
        <InputContainer>
            <Input placeholder='Entrez votre e-mail' type="email"/>
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
