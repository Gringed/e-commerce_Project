import React from "react";
import styled from "styled-components";
import { laptopS, mobile, tablet } from "../responsive";

const PrimaryColor = "whitesmoke";
const SecondaryColor = "pink";
const TertiaryColor = "#18191a";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(24, 25, 26, 0.8), rgba(24, 25, 26, 0.8)),
    url("https://www.mensjournal.com/wp-content/uploads/2021/11/shutterstock_607536575.jpg?quality=86&strip=all")
      center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: ${PrimaryColor};
  ${mobile({width: "80%"})}
  ${tablet({width: "70%"})}
  ${laptopS({width: "55%"})}
`;
const Logo = styled.h1`
  color: ${PrimaryColor};
  border-bottom: 5px solid ${SecondaryColor};
  font-size: 45px;
  width: fit-content;
  ${mobile({fontSize: "25px", textAlign: "center"})}
`;

const Span = styled.span`
  color: ${SecondaryColor};
  background: ${TertiaryColor};
  padding: 0 10px;
`;

const Title = styled.h1`
  font-size: 25px;
  color: ${SecondaryColor};
  width: fit-content;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  background: ${PrimaryColor};
  border: 1px solid ${TertiaryColor};
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px ${SecondaryColor};
  }
`;
const Agreement = styled.span`
  font-size: 13px;
  margin: 20px 0;
  color: ${TertiaryColor};
  & > b {
    color: ${SecondaryColor};
    font-size: 15px;
  }
`;
const Button = styled.button`

  padding: 15px;
    font-family: 'Montserrat', sans-serif;
    background: none;
    border: 2px solid ${SecondaryColor};
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease-in;
    &:hover{
        color: ${SecondaryColor};
        background: ${TertiaryColor};
        border: 2px solid ${TertiaryColor};
    }
`;

const Connexion = styled.a`
  color: ${TertiaryColor};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease-in;
  font-size: 20px;
  &:hover{
        color: ${SecondaryColor};
        font-size: 25px;
    }
`

const Register = () => {
  return (
    <Container>
      <Logo>
        Mooney | <Span>Inscription</Span>
      </Logo>
      <Wrapper>
        <Title>Inscription | <Connexion href="/login">Se connecter</Connexion></Title>
        <Form>
          <Input placeholder="Prénom" />
          <Input placeholder="Nom" />
          <Input placeholder="E-mail" type="email" required />
          <Input placeholder="Pseudo" type="text" />
          <Input placeholder="Mot de passe" type="password" />
          <Input placeholder="Confirmation de mot de passe" type="password" />
          <Agreement>
            En cliquant sur <b>S'inscrire</b>, j'accepte que mes données soient
            traitées en accord avec la <b>Politique de confidentialité</b>
          </Agreement>
          <Button>S'inscrire</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
