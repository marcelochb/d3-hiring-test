import React from 'react';

import { Container, Content, CountryName, CountryImage, CountryData, LabelCountryData, CountryDataRow, TextCountryData } from './styles';
import { TypeCountryComponent } from '../../utils/types';

export const Country: React.FC<TypeCountryComponent> = ({ country }) => {
  return (
    <Container>
      <Content>
        <CountryImage>
          <img
            src={country.flag}
            alt={country.name}
            width={290}
            height={200}
          />
        </CountryImage>
        <CountryData>
          <CountryName>{country.name}</CountryName>
          <CountryDataRow>
            <LabelCountryData>Population</LabelCountryData>
            <TextCountryData>{`:    ${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</TextCountryData>
          </CountryDataRow>
          <CountryDataRow>
            <LabelCountryData>Region</LabelCountryData>
            <TextCountryData>{`:    ${country.region}`}</TextCountryData>
          </CountryDataRow>
          <CountryDataRow>
            <LabelCountryData>Capital</LabelCountryData>
            <TextCountryData>{`:    ${country.capital}`}</TextCountryData>
          </CountryDataRow>
        </CountryData>
      </Content>

    </Container>
  );
}
