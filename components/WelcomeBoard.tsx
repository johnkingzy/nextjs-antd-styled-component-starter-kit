import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface WelcomeBoardProps {}

const StyledP = styled.p`
  display: flex;
  margin: 0 auto;
  font-size: 1.75rem;
  justify-content: center;
`;

const WelcomeBoard: FunctionComponent<WelcomeBoardProps> = () => {
  return (
    <StyledP className="mb-0 mt-3 text-disabled">
      Welcome to the world !
    </StyledP>
  );
};

export default WelcomeBoard;
