import styled from "styled-components";

const Button = styled.button`
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  background-color: #7b3e16;
  color: white;
  padding: 1rem;
  font-size: 1.1rem;
  font-family: Helvetica, sans-serif;
  //position: relative;
  overflow: hidden;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Button;
