import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background: red;
`;

export const AppHeader = styled.header`
  background-color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  p {
    color: tomato;
  }
`;

export const Button = styled.button`
  border: none;
  width: 100px;
  padding: 10px;
  margin-right: 2px;
  cursor: pointer;
  ${(props) => css`
    background-color: ${props.light ? '#eee' : '#ffb86c'};
    border: ${props.border ? '1px solid #333' : 'none'};
  `}
`;
