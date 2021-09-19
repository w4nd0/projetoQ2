import styled from 'styled-components';

export const StyledNav = styled.nav`

	background-color: #171821;
	position: fixed;
  top: 0;
	z-index: 2;

	width: ${ props => props.width || '40px' };
  height: ${ props => props.heigth || '110vh' };
  border-bottom: 2px solid #f1f1f1;
  padding: ${ props => props.padding || '0' };
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration: none;
    color: #141414;
    transition: 1s ease;
    margin: 0;
  }

  a:hover{
    text-decoration: underline;
    transition: 1s ease;
  }
`;