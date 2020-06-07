import React from 'react';

import { Container } from './styles';
import { TypeCountriesContainer } from '../../utils/types';
import { Country } from '../../components';

export const Countries: React.FC<TypeCountriesContainer> = ({ countries }) => {
  return (
    <Container>
      {countries.map(country => <Country country={country} />)}
    </Container>
  );
}
