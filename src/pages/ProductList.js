import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const PrimaryColor = "white";
const SecondaryColor = "pink";
const TertiaryColor = "#18191a";

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({display: "flex", flexDirection: "column"})}
`

const FilterText = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin: 5px;
  ${mobile({fontSize: "15px"})}
`
const Select = styled.select`
  padding: 10px;
  margin: 5px;
  border: 2px solid ${SecondaryColor};
  font-family: 'Montserrat', sans-serif;
  ${mobile({margin: "5px 0 5px 0", padding: "10px 5px 10px 5px"})}
`
const Option = styled.option`
  color: ${TertiaryColor};
`

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Vestes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer par :</FilterText>
          <Select defaultValue="Couleur">
            <Option disabled value="Couleur">Couleur</Option>
            <Option>Blanc</Option>
            <Option>Jaune</Option>
            <Option>Noir</Option>
            <Option>Rouge</Option>
            <Option>Vert</Option>
            <Option>Bleu</Option>
          </Select>
          <Select defaultValue="Taille">
            <Option disabled value="Taille">Taille</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Trier par :</FilterText>
          <Select defaultValue="Nouveautés">
            <Option disabled value="Nouveautés">Nouveautés</Option>
            <Option>Prix croissant</Option>
            <Option>Prix décroissant</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
