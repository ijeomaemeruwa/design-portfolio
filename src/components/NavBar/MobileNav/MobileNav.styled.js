import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #121212;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  overflow-x: hidden;
  top: 0;
  width: 300px;
  transition: 0.5s ease-in-out;
  right: ${({ open }) => open ? '0' : '-100%'};
`