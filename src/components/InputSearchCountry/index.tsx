import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputSearch, Container } from './styles';
import { TypeInputSearchCountry } from '../../utils/types';

export const InputSearchCountry: React.FC<TypeInputSearchCountry> = ({ searchCountriesByName }) => {
  return (
    <Container data-testId='inputSearchCountry'>
      <FontAwesomeIcon icon={faSearch} />
      <InputSearch
        placeholder='Search for a country...'
        onChange={(event) => searchCountriesByName(event.target.value)}
      />
    </Container>
  );
}
