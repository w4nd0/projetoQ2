import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  margin: 0;
  padding: 0;

  z-index: 2;

  li {
    padding: 18px 0px 18px 40px;
    color: #f5f5f5;
    text-align: left;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    align-items: center;

    &:hover {
      color: var(--purple);
    }
  }

  li:first-child {
    padding-top: 100px;
  }

  span {
    color: var(--purple);
    margin-right: 5px;
  }

  flex-flow: column nowrap;
  background-color: #171821;
  position: fixed;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  top: 0;
  left: 0;
  height: 100%;
  width: 320px;
  padding-top: 40px;
  transition: transform 0.6s ease-in-out;

  @media (min-width: 768px) {
    li {
      color: #f5f5f5;
    }
  }
`;

export const StyledSpan = styled.span`
  width: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  margin-left: 5px;
  padding: 2px;
`;
