import styled  from 'styled-components';
import { keyframes } from 'styled-components';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotateX(0deg);
    
  }
  to {
    transform: rotateY(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: 1.2rem;
  &:hover{
      animation: none;
  }
`;

export default Rotate