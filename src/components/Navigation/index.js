import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import {
  MdPersonAdd,
  MdPets,
  MdDashboard,
  MdExitToApp,
  MdDirectionsCar,
} from 'react-icons/md';

import { Container, ButtonExit } from './styles';
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
      <NavLink to="/admin">
        <MdDashboard />
        <span>Home</span>
      </NavLink>
      <NavLink to="/signup">
        <MdPersonAdd />
        <span>Cadastro de Usuário</span>
      </NavLink>
      <NavLink to="/pet">
        <MdPets />
        <span>Cadastro de Pet</span>
      </NavLink>
      <NavLink to="/car">
        <MdDirectionsCar />
        <span>Cadastro de Veículos</span>
      </NavLink>
      <ButtonExit type="button" onClick={handleLogout}>
        <MdExitToApp />
        <span>Sair</span>
      </ButtonExit>
    </Container>
  );
}
