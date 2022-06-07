import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
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
  width: 30%;
  padding: 20px;
  background: ${PrimaryColor};
  ${mobile({ width: "80%" })}
  ${tablet({ width: "70%" })}
  ${laptopS({ width: "55%" })}
`;
const Logo = styled.h1`
  color: ${PrimaryColor};
  border-bottom: 5px solid ${SecondaryColor};
  font-size: 40px;
  width: fit-content;
  ${mobile({ fontSize: "25px", textAlign: "center" })}
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
const Inscription = styled.a`
  color: ${TertiaryColor};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease-in;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: ${SecondaryColor};
    font-size: 25px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  padding: 15px;
  font-family: "Montserrat", sans-serif;
  background: none;
  border: 2px solid ${SecondaryColor};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${SecondaryColor};
    background: ${TertiaryColor};
    border: 2px solid ${TertiaryColor};
  }
  &:disabled{
    cursor: not-allowed;
    color: transparent;
  }
`;

const Link = styled.a`
  font-size: 13px;
  margin: 20px 0;
  color: ${TertiaryColor};
  width: fit-content;
  text-decoration: none;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    color: ${SecondaryColor};
    text-decoration: underline;
  }
`;

const Error = styled.span`
  color: ${TertiaryColor};
  padding: 20px 10px;
  background: #ff000091;
  font-size: 14px;
`


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector(state=>state.user)

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {email, password})
  }
  return (
    <Container>
      <Logo>
        Mooney | <Span>Connexion</Span>
      </Logo>
      <Wrapper>
        <Title>
          Connexion | <Inscription href="/register">Créer un compte</Inscription>
        </Title>
        <Form>
          <Input
            placeholder="E-mail"
            type="email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Mot de passe"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link>Mot de passe oublié ?</Link>
          {error ? <Error>E-mail ou mot de passe incorrect</Error> : null}
          
          <Button onClick={handleLogin} disabled={isFetching}>Se connecter</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
