import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdPets } from 'react-icons/md';

import { Container, Form, SubmitButton, InputContainer } from './styles';

import api from '../../services/api';
import { userLocal } from '../../services/auth';

export default function Pet({ history }) {
  const [pet, setPet] = useState({ name: '', breed: '', user: '' });
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const populateCars = async () => {
      const requisicao = await api.get(`/car`);
      setCars(requisicao.data);

      const { _id } = await userLocal();
      setPet({ user: _id });
    };
    populateCars();
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPet({
      ...pet,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post(`/pet`, pet);

      setPet({ name: '', breed: '' });
      // history.push('/admin');
    } catch (err) {
      toast.error('Email ou senha inválido!');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>
          <MdPets color="#eee" size={128} />
        </h1>
        <InputContainer>
          <label htmlFor="car">nome</label>
          <select id="car" name="car" onChange={handleInputChange}>
            {cars &&
              cars.map(({ _id, model }) => (
                <option key={_id} value={_id}>
                  {model}
                </option>
              ))}
          </select>
        </InputContainer>
        <InputContainer>
          <label htmlFor="name">nome</label>
          <input
            name="name"
            type="text"
            value={pet.name}
            onChange={handleInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="breed">raça</label>
          <input
            name="breed"
            type="text"
            value={pet.breed}
            onChange={handleInputChange}
            required
          />
        </InputContainer>

        <SubmitButton>enviar</SubmitButton>
      </Form>
    </Container>
  );
}
