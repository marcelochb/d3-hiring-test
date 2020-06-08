import React from 'react';

import { InputSearchCountry, DropDownRegion } from '../../components';
import { Container, FormFilter } from './styles';
import { TypeHomeContainer } from '../../utils/types';
import { Countries } from '../Countries';

export const Home: React.FC<TypeHomeContainer> = ({ countries, searchCountriesByName, searchCountriesByRegion }) => {
  return (
    <Container>
      <FormFilter>
        <InputSearchCountry searchCountriesByName={searchCountriesByName} />
        <DropDownRegion searchCountriesByRegion={searchCountriesByRegion} />
      </FormFilter>
      <Countries countries={countries} />
    </Container>
  );
}
