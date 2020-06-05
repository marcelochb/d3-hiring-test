import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import { TypesHeader } from './types';

const Header: React.FC<TypesHeader> = ({ changeTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <Container>
      Where in the World?
      <FontAwesomeIcon icon={faMoon} />

      <button onClick={changeTheme}>{title} mode</button>
    </Container>
  );
}

export default Header;