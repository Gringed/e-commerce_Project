import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile, tablet } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethod";
import { useNavigate } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

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
  ${mobile({margin: "0 5px 0 5px"})}
`;
const TopTexts = styled.div`
    ${mobile({display: "none"})}
    ${tablet({fontSize: "12px"})}
`;
const TopText = styled.span`
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  ${mobile({flexDirection: "column"})}
  ${tablet({flexDirection: "column"})}
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
  ${mobile({alignItems: "center"})}
`;
const Image = styled.img`
  width: 200px;
  ${mobile({width: "50px", height: "50px"})}
  ${tablet({width: "150px", height: "150px"})}
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
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  }
  useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await userRequest.post("/checkout/payment", {
            tokenId:stripeToken.id,
            amount:cart.total*100,
            
          })
          history("/success", {state:{data:res.data}})
        } catch (error) {
          
        }
      }
      stripeToken && makeRequest();
  }, [stripeToken, cart.total, history])
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
          {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetails>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductID>
                      <b>ID:</b> {product._id}
                    </ProductID>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetails>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
              <SummaryTitle>Récapitulatif de la commande</SummaryTitle>
              <SummaryItem>
                  <SummaryItemText>Sous - total</SummaryItemText>
                  <SummaryItemPrice>{cart.total} €</SummaryItemPrice>
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
                  <SummaryItemPrice>{cart.total} €</SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout
                name="Mooney"
                image="https://png.pngtree.com/png-clipart/20191027/ourlarge/pngtree-payment-icon-png-image_1842637.jpg"
                billingAddress
                shippingAddress
                description={`Total de la commande : ${cart.total}€`}
                amount={cart.total*100}
                token={onToken}
                stripeKey={KEY}
              >
                {cart.total === 0 ? <Button disabled>Commander maintenant</Button> : <Button>Commander maintenant</Button>}
              </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
