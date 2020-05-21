import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media screen and (min-width: 800px) {
    height: -moz-available;          /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    height: fill-available;
  }
`;