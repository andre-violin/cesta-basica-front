import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);

  a {
    height: 80px;
    width: 100%;
    /* border: solid 3px #eee; */
    /* border-radius: 50%; */
    padding: 10px;
    /* margin: 20px; */
    color: #eee;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    :hover {
      border: none;
      background: rgba(0, 0, 0, 0.9);
    }
    span {
      text-align: center;
      font-size: 10px;
    }
  }
`;

export const ButtonExit = styled.button`
  position: absolute;
  bottom: 0px;
  border: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
  color: #222;
  height: 80px;
  width: 80px;
  /* border-radius: 50%; */
  padding: 10px;
  font-size: 2em;

  :hover {
    background: rgba(0, 0, 0, 0.9);
    color: #eee;
  }
  span {
    text-align: center;
    font-size: 10px;
  }
`;
