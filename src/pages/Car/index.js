import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdPets } from 'react-icons/md';

import { Container, Form, SubmitButton, InputContainer } from './styles';

import api from '../../services/api';
import { userLocal } from '../../services/auth';

export default function SignIn({ history }) {
  const [car, setCar] = useState({ model: '', pet: '', user: '' });
  const [pets, setPets] = useState([]);
  // const [car, setCar] = useState('');

  useEffect(() => {
    const populatePets = async () => {
      const allPets = await api.get(`/pet`);
      setPets(allPets.data);
    };
    populatePets();
  }, []);

  function handleInputChange(e) {
    const { id, value } = e.target;
    setCar({
      ...car,
      [id]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { _id } = await userLocal();
      await setCar({
        ...car,
        user: _id,
      });
      const response = await api.post(`/car`, car);
      console.log('car', response);

      // history.push('/admin');
    } catch (err) {
      toast.error('Não foi possível enviar as informações!');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>
          <MdPets color="#eee" size={128} />
        </h1>
        <InputContainer>
          <label htmlFor="pet">pet</label>
          <input
            id="pet"
            type="text"
            list="pets"
            onChange={handleInputChange}
            required
          />
          <datalist id="pets">
            {pets &&
              pets.map(petData => (
                <option key={petData._id}>{petData.name}</option>
              ))}
          </datalist>
          {/* <select id="car" onChange={handleInputChange} required>
            {pets &&
              pets.map(petData => (
                <option key={petData.id} value={petData.id}>
                  {petData.name}
                </option>
              ))}
          </select> */}
        </InputContainer>
        <InputContainer>
          <label htmlFor="name">model</label>
          <input
            id="name"
            type="text"
            value={car.name}
            onChange={handleInputChange}
            required
          />
        </InputContainer>

        <SubmitButton>enviar</SubmitButton>
      </Form>
    </Container>
  );
}
