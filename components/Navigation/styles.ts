import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 1em 0;
  display: flex;

  & > * + *{
    margin-left: 1rem
  }
`;

export const Nav = styled.a`
  text-decoration: underline 2px;

  & :hover :focus{
    cursor: pointer;
    text-decoration: underline dotted 2px;
  }
`;
