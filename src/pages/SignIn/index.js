import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { login } from '../../services/auth';

import {
  Container,
  Form,
  SubmitButton,
  InputContainer,
  ContainerLinks,
} from './styles';

export default function SignIn({ history }) {
  const [loading, setLoading] = useState('disabled');
  const [user, setUser] = useState({ email: '', password: '' });

  useEffect(() => {
    const isEnabled = () => {
      return user.email.length > 5 && user.password.length >= 6
        ? setLoading('')
        : setLoading('disabled');
    };
    isEnabled();
  }, [user]);

  function handleInputChange(e) {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post(`/sessions`, user);

      const { token, user: userData } = response.data;

      if (token) {
        login(token, userData);
      }

      history.push('/admin');
    } catch (err) {
      toast.error('Email ou senha inválido!');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>
          <MdShoppingCart color="#eee" size={128} />
        </h1>
        <InputContainer>
          <label htmlFor="email">e-mail</label>
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">senha</label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={handleInputChange}
            required
          />
        </InputContainer>

        <SubmitButton loading={loading}>entrar</SubmitButton>
      </Form>
      <ContainerLinks>
        <Link to="/">Cancelar</Link>
      </ContainerLinks>
    </Container>
  );
}
