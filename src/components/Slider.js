import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const PrimaryColor = "whitesmoke";
const SecondaryColor = "pink";
const TertiaryColor = "#18191a";
const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  ${mobile({display: "none"})}
`;

const Arrow = styled.div`
  color: white;
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: ${SecondaryColor};
  border-radius: 50%;
  position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.7;
  z-index: 1;
  transition: all 0.2s ease-in;
    &:hover{
        color: ${SecondaryColor};
        background: ${TertiaryColor};
    }
`;

const Wrapper = styled.div`
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all ease-out 1s;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 90%;
  width: 90%;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 60px;
`;
const Title = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
`;
const Description = styled.p`
  margin: 40px 0;
  font-size: 20px;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  border: 2px solid ${SecondaryColor};
  cursor: pointer;
  background: none;
  color: ${TertiaryColor};
  transition: all 0.2s ease-in;
    &:hover{
        color: ${SecondaryColor};
        background: ${TertiaryColor};
        border: 2px solid ${TertiaryColor};
    }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
      if(direction === "left"){
          setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
      }
      else{
          setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
      }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button href={item.id}>Commander</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
