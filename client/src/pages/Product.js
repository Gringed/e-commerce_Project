import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile, tablet } from '../responsive'

const PrimaryColor = "white";
const SecondaryColor = "pink";
const TertiaryColor = "#18191a";

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    color: ${TertiaryColor};
    ${mobile({flexDirection: "column", padding: "5px"})}
    ${tablet({flexDirection: "column", padding: "15px"})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0 50px;
    ${mobile({padding: "5px"})}
`
const Title = styled.h1`
    font-size: 30px;
    ${mobile({textAlign: "center"})}
`
const Description = styled.p`
    text-align: justify;
    margin: 30px 0;
`
const Price = styled.span`
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 30px 0;
    ${mobile({width: "100%"})}
    ${tablet({width: "100%"})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.color};
    box-shadow: 0px 1px 2px 0px ${TertiaryColor};
    margin: 0 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    padding: 5px;
`

const FilterSizeOption = styled.option`
    
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    justify-content: space-between;
    ${mobile({width: "100%"})}
    ${tablet({width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    color: ${TertiaryColor};
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 20px;
    border: 2px solid ${SecondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 10px;
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
`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
            </ImgContainer>
            <InfoContainer>
                <Title>Tee shirt oversize basique - Beige</Title>
                <Description>Ce tee-shirt à manches courtes couleur unie avec motif en jersey de coton possède un col rond et une coupe oversize, pour un porté large et cool. <br />
                Le mannequin mesure 1m75 et porte une taille M.</Description>
                <Price>20 €</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Couleurs</FilterTitle>
                        <FilterColor color="beige" />
                        <FilterColor color="black" />
                        <FilterColor color="white" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Taille</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>Ajouter au panier</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
