import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PrimaryColor = "whitesmoke";
const SecondaryColor = "pink";
const TertiaryColor = "#18191a";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  border: ${(props) =>
    props.type === "filled" ? SecondaryColor + " 2px solid" : TertiaryColor + " 2px solid"};
  background: ${(props) =>
    props.type === "filled" ? "none" : "transparent"};
  color: ${TertiaryColor};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${SecondaryColor};
    background: ${TertiaryColor};
    border: 2px solid ${TertiaryColor};
  }
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${TertiaryColor};
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;

const Colors = styled.div`
  display: flex;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  border: 2px solid ${TertiaryColor};
  margin: 0 5px 0 0;
`;
const ProductSize = styled.span``;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const ProductAmount = styled.span`
  font-size: 25px;
  padding: 10px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
`;

const Hr = styled.hr`
  background: #18191a3d;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  padding: 20px;
  height: 50vh;
  border: 1px solid #18191a3d;
`;
const SummaryTitle = styled.h1`
  font-size: 20px;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
 font-weight: ${props => props.type === "important" && "bold"};
 font-size: ${props => props.type === "important" && "24px"};

`;
const SummaryItemText = styled.span`
  
`;
const SummaryItemPrice = styled.span`
  
`;
const Button = styled.button`
  width: 100%;
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
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Panier</Title>
        <Top>
          <TopButton>Continuer les achats</TopButton>
          <TopTexts>
            <TopText>Panier (4)</TopText>
            <TopText>Vos favoris (1)</TopText>
          </TopTexts>
          <TopButton type="filled">Procéder au paiement</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://www.seva.bzh/wp-content/uploads/2021/01/t-shirt-personnalisable-beige-since-seva-1.png" />
                <Details>
                  <ProductName>
                    <b>Produit</b> : T-shirt Beige
                  </ProductName>
                  <ProductID>
                    <b>ID</b> : 01258745
                  </ProductID>
                  <ProductColor color="bisque" />
                  <ProductSize>
                    <b>Taille</b> : S
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>25 €</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png" />
                <Details>
                  <ProductName>
                    <b>Produit</b> : Sac à main
                  </ProductName>
                  <ProductID>
                    <b>ID</b> : 04649823
                  </ProductID>
                  <Colors>
                    <ProductColor color="beige" />
                    <ProductColor color="#16a512" />
                  </Colors>
                  <ProductSize>
                    <b>Taille</b> : Unique
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>36 €</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
              <SummaryTitle>Récapitulatif de la commande</SummaryTitle>
              <SummaryItem>
                  <SummaryItemText>Sous - total</SummaryItemText>
                  <SummaryItemPrice>61 €</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                  <SummaryItemText>Frais de livraison</SummaryItemText>
                  <SummaryItemPrice>5 €</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                  <SummaryItemText>Réduction</SummaryItemText>
                  <SummaryItemPrice>0 €</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="important">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>66 €</SummaryItemPrice>
              </SummaryItem>
              <Button>Procéder au paiement</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
