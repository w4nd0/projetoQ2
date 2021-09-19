import styled from "styled-components";

export const UlContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    cursor: pointer;
    font-size: 20px;
    margin-right: 50px;
    height: 25px;
  }

  li:hover {
    border-bottom: 1px solid var(--black);
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--navy);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    margin-top: 0;
    transition: transform 0.3s ease-in-out;
    padding: 56px 0 0 40px;

    li {
      color: var(--white);
      margin-right: 0;
      margin-bottom: 50px;
    }

    li:hover {
      border-bottom: none;
    }
  }
`;

export const NavContainer = styled.nav`
  width: 100%;
  height: 7vh;
  padding: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 7px 15px -5px rgb(0 0 0 / 75%);
  align-items: center;
`;

export const BurgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  right: 20px;
  z-index: 1;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? "var(--gray)" : "var(--darkgray)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
