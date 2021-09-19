import styled from "styled-components";

export const StyledBurger = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  top: 100px;
  z-index: 3;
  cursor: pointer;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  /* @media(max-width: 768px){
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  } */

  div {
    width: 30px;
    height: 4px;
    margin-left: 5px;
    background-color: #fff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
