import React from 'react';

import {
  Container,
  Content,
  CountryDataContainer,
  CountryDataContent,
  BorderCountries,
  CountryDataItens,
  CountryDataRow,
  CountryImage,
  LabelCountryData,
  TextCountryData,
  CountryName,
  CountryContainer,
  BorderContainer,
  TextBorder
} from './styles';
import { TypeDetailCountry } from '../../utils/types';
import { ButtonBack } from '../../components';

export const DetailCountry: React.FC<TypeDetailCountry> = ({ country }) => {

  console.log('detailcountry', country)
  return (
    <Container>
      <Content>
        <ButtonBack />

        <CountryContainer>


          <CountryImage>
            <img
              src={country.flag}
              alt={country.name}
            />
          </CountryImage>

          <CountryDataContainer>
            <CountryName>{country.name}</CountryName>

            <CountryDataContent>

              <CountryDataItens>
                <CountryDataRow>
                  <LabelCountryData>Native Name:</LabelCountryData>
                  <TextCountryData>{country.nativeName}</TextCountryData>
                </CountryDataRow>
                <CountryDataRow>
                  <LabelCountryData>Population:</LabelCountryData>
                  <TextCountryData>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TextCountryData>
                </CountryDataRow>
                <CountryDataRow>
                  <LabelCountryData>Region:</LabelCountryData>
                  <TextCountryData>{country.region}</TextCountryData>
                </CountryDataRow>
                <CountryDataRow>
                  <LabelCountryData>Sub Region:</LabelCountryData>
                  <TextCountryData>{country.subregion}</TextCountryData>
                </CountryDataRow>
                <CountryDataRow>
                  <LabelCountryData>Capital:</LabelCountryData>
                  <TextCountryData>{country.capital}</TextCountryData>
                </CountryDataRow>
              </CountryDataItens>

              <CountryDataItens>
                <CountryDataRow>
                  <LabelCountryData>Top Level Domain:</LabelCountryData>
                  <TextCountryData>{country.topLevelDomain}</TextCountryData>
                </CountryDataRow>
                <CountryDataRow>
                  <LabelCountryData>Currencies:</LabelCountryData>
                  <TextCountryData>{country.currencies.map(currency => currency.name)}</TextCountryData>
                </CountryDataRow>
                <CountryDataRow>
                  <LabelCountryData>Languages:</LabelCountryData>
                  <TextCountryData>{country.languages.map(language => language.name)}</TextCountryData>
                </CountryDataRow>
              </CountryDataItens>

            </CountryDataContent>

            <BorderCountries>
              <LabelCountryData>Border Countries:</LabelCountryData>
              {country.borders.map(border =>
                (
                  <BorderContainer>
                    <TextBorder>{border}</TextBorder>
                  </BorderContainer>
                )
              )}

            </BorderCountries>

          </CountryDataContainer>
        </CountryContainer>

      </Content>

    </Container>
  );
}