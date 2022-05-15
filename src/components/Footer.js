import { Facebook, Instagram, LinkedIn, Mail, Phone, Room, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const PrimaryColor = "whitesmoke";
const SecondaryColor = "pink";
const TertiaryColor = "#18191a";

const Container = styled.div`
  display: flex;
  background: ${TertiaryColor};
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.h1`
  color: ${PrimaryColor};
  border-bottom: 5px solid ${SecondaryColor};
  text-transform: uppercase;
`;

const Description = styled.p`
  color: ${PrimaryColor};
  margin: 20px 0;
  text-align: justify;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${SecondaryColor};
  font-weight: bold;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #${(props) => props.color};
  color: ${PrimaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h3`
  color: ${PrimaryColor};
  border-bottom: 5px solid ${SecondaryColor};
  text-transform: uppercase;
  margin: 30px 0 30px 0;
`;
const List = styled.ul`
  margin: 20px 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  color: ${PrimaryColor};
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContactItem = styled.div`
    display: flex;
    margin: 20px 0 5px 0;
    align-items: center;
    color: ${PrimaryColor};
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Mooney</Logo>
        <Description>
          Retrouve nous sur les réseaux sociaux afin de ne manquer aucune
          actualités ©Copyright | <Link href="#">Mentions Légales</Link>
        </Description>
        <SocialContainer>
          <SocialIcon color="3b5998">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="00acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="0e76a8">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Liens utiles</Title>
        <List>
          <ListItem>Accueil</ListItem>
          <ListItem>Panier</ListItem>
          <ListItem>Nouveautés</ListItem>
          <ListItem>Favoris</ListItem>
          <ListItem>Mon compte</ListItem>
          <ListItem>Conditions d'utilisations</ListItem>
        </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
              <Room style={{marginRight:"10px"}}/> 23 rue du nombre, Jim Carrey 171962
          </ContactItem>
          <ContactItem>
              <Phone style={{marginRight:"10px"}}/> +33 6 66 66 66 66
          </ContactItem>
          <ContactItem>
              <Mail style={{margin:"0 10px 5px 0"}}/> contact@mooney23.fr
          </ContactItem>
          <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
