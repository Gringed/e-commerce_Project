import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethod";
import { mobile, tablet } from "../responsive";
import { useDispatch } from "react-redux";

const SecondaryColor = "pink";
const TertiaryColor = "#18191a";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  color: ${TertiaryColor};
  ${mobile({ flexDirection: "column", padding: "5px" })}
  ${tablet({ flexDirection: "column", padding: "15px" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "5px" })}
`;
const Title = styled.h1`
  font-size: 30px;
  ${mobile({ textAlign: "center" })}
`;
const Description = styled.p`
  text-align: justify;
  margin: 30px 0;
`;
const Price = styled.span`
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 30px 0;
  ${mobile({ width: "100%" })}
  ${tablet({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  box-shadow: 0px 1px 2px 0px ${TertiaryColor};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  ${tablet({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${TertiaryColor};
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  border: 2px solid ${SecondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 10px;
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

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/" + id);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < 23 && setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>{product.price} €</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Couleurs</FilterTitle>
              {product.color?.map((color) => (
                <FilterColor
                  color={color}
                  key={color}
                  onClick={() => setColor(color)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Taille</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((size) => (
                  <FilterSizeOption key={size}>{size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("decrease")}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("increase")}
              />
            </AmountContainer>
            <Button onClick={handleClick}>Ajouter au panier</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
