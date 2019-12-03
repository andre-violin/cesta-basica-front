import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import { Container, Form, SubmitButton, InputContainer } from './styles';

export default function SignUp({ history }) {
  const [loading, setLoading] = useState('disabled');

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: false,
  });

  useEffect(() => {
    const isEnabled = () => {
      return user && user.email.length > 5 && user.password.length >= 6
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

  function handleInputCheckChange(e) {
    const { id } = e.target;
    setUser({
      ...user,
      [id]: !user.isAdmin,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post('/users', user);

      // setUser({ name: '', email: '', password: '' });
      history.push('/signin');
    } catch (err) {
      console.log('response', err);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>
          <MdShoppingCart color="#eee" size={128} />
        </h1>
        <InputContainer>
          <label htmlFor="name">nome</label>
          <input
            id="name"
            type="text"
            value={user.name}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
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

        <InputContainer>
          <input
            id="isAdmin"
            type="checkbox"
            value={user.isAdmin}
            onChange={handleInputCheckChange}
          />
          <label htmlFor="isAdmin">administrador</label>
        </InputContainer>

        <SubmitButton loading={loading}>enviar</SubmitButton>
      </Form>
    </Container>
  );
}
