import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const SecondaryColor = "pink";
const TertiaryColor = "#18191a";

const Container = styled.div``
const Title = styled.h1`
text-transform: capitalize;
  margin: 25px;
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
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const cat_utf = category.replace('_', ' ')
  const [filter, setFilter] = useState({})
  const [sort, setSort] = useState("new");

  const handleFilters = (e) => {
    const val = e.target.value;
    setFilter({
      ...filter,
      [e.target.name] : val
    })
   
  }
  return (
    <Container>
      <Navbar />
      <Title>{cat_utf}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer par :</FilterText>
          <Select defaultValue="Couleur" name='color' onChange={handleFilters}>
            <Option disabled value="Couleur">Couleur</Option>
            <Option value="White">Blanc</Option>
            <Option value="Beige">Beige</Option>
            <Option value="Yellow">Jaune</Option>
            <Option value="Black">Noir</Option>
            <Option value="Red">Rouge</Option>
            <Option value="Darkkhaki">Vert</Option>
            <Option value="Blue">Bleu</Option>
          </Select>
          <Select defaultValue="Taille" name='size' onChange={handleFilters}>
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
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="new">Nouveautés</Option>
            <Option value="asc">Prix croissant</Option>
            <Option value="desc">Prix décroissant</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filter={filter} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
