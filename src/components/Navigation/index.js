import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { Container } from './styles';
import { logout } from '../../services/auth';

export default function Menu(props) {
  const [loged, setLoged] = useState(true);
  function handleLogout() {
    logout();
    setLoged(!loged);
  }
  return (
    <Container>
      {!loged && <Redirect to="/" />}
      <NavLink to="/signup">Cadastro</NavLink>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </Container>
  );
}
