import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Container, TextButton } from './styles';

export const ButtonBack: React.FC = () => {
  return (
    <Link to='/'>
      <Container data-testid='buttonTheme'>
        <FontAwesomeIcon icon={faArrowLeft} />

        <TextButton>
          Back
    </TextButton>
      </Container>
    </Link>

  );
}
