import React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <header>
        <h1>Cesta Básica</h1>
        <Link to="/signin">
          <MdAccountCircle />
        </Link>
      </header>
    </Container>
  );
}
