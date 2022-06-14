import styled from 'styled-components';

const Input = styled.input`
  width: 10rem;
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 1rem;
  background: #e0ece4;
  color: #797a7e;

  &:hover,
  &:active,
  &:focus {
    border: none;
  }
  &::placeholder {
    color: #797a7e;
  }
`;

const Button = styled.button`
  width: 10rem;
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 1rem;
  background: #797a7e;
  color: #f7f2e7;
`;

export { Input, Button };
