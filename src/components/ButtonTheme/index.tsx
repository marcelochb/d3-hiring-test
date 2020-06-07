import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';

import { Container, Button } from './styles';
import { TypesButtonTheme } from '../../utils/types';

export const ButtonTheme: React.FC<TypesButtonTheme> = ({
  changeTheme,
  title,
}) => {
  const iconMoon = title === 'Light' ? faMoonSolid : faMoonRegular
  return (
    <Container data-testid='buttonTheme'>
      <FontAwesomeIcon icon={iconMoon} />

      <Button
        onClick={changeTheme}
      >
        {title} mode
      </Button>
    </Container>
  );
}
