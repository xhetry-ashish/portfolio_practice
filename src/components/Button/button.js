import styled from "styled-components";


const Button = styled.button`
  display: block;
  border: 2px solid $pri-color;
  border-radius: 6px;
  cursor:pointer;
  text-decoration: none;
  color: $text-color;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: $myFont;
  position: relative;
  overflow:hidden;
  transition: .3s;
  &:after {
    position: absolute;
    transition: .3s;
    content: '';
    width: 0;
    left: 50%;
    bottom: 0;
    height: 5px;
    background: #271010;
  }
  &:hover {
    &:after {
      width: 100%;
      left: 0;
    }
  }
  &:after{
    left: 0;
  }
`


export default Button