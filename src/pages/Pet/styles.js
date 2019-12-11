import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  height: 100%;
  padding: 30px;
  margin: 0 auto;
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  h1 {
    margin-bottom: 50px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin: 0 auto; */
  max-width: 300px;
  width: 80%;

  label {
    margin-top: 15px;
  }
  input {
    background: rgba(0, 0, 0, 0.3);
    padding: 10px 15px;
    border: none;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  font-size: 16px;
  padding: 10px 15px;
  max-width: 300px;
  width: 100%;
  margin-top: 35px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  color: #222;
  font-weight: bold;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
