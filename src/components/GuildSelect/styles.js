import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  background: var(--gradient-blue-dark);
  font-family: var(--font);

  img {
    margin: 10px;
    transition: 1s;

    &:hover {
      transform: translateY(-30px);
    }
  }

  h2,
  h3 {
    font-family: var(--font);
    text-transform: uppercase;
  }

  h2 {
    font-size: 3.5rem;
    width: 100%;
    padding: 2rem;
  }

  h3 {
    font-size: 3rem;
    padding: 7px;
  }
`;

export const GuildButton = styled.button`
  background: var(--gradient-brown-dark);
  padding: 10px;
  color: white;
  border-radius: 10px;
  font-size: 1.7rem;
  font-family: var(--font);
  width: 70%;

  &:hover {
    background: var(--gradient-blue-dark);
  }
`;

export const Tabs = styled.div`
  overflow: hidden;
  background: transparent;
  font-family: Open Sans;
  height: 3em;
  display: flex;
  justify-content: center;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 24%;
  padding: 0;
  border-radius: 5px;
  position: relative;
  font-family: var(--font);
  background: var(--gradient-brown-dark);
  color: #fff;

  margin-right: 0.1em;
  font-size: 0.9em;
  border: ${(props) => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${(props) => (props.active ? "none" : "")};
  height: ${(props) => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
`;
export const Content = styled.div`
  ${(props) => (props.active ? "display: flex" : "display:none")};
  background: var(--gradient-blue-dark);
  margin: 12px;
  border-radius: 15px;
  /* justify-content: space-between; */
`;

export const GuildContainer = styled.div`
  padding: 10px;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  font-family: var(--font);
  color: var(--white);

  h3 {
    font-family: var(--font);
    @media (min-width: 768px) {
      width: 21.5rem;
    }
  }

  label {
    font-family: var(--font);
    color: orange;
    display: inline-block;
    margin-bottom: 100px;
    font-weight: 700;
    @media (min-width: 690px) {
      margin-bottom: 10px;
    }
  }

  section {
    @media (min-width: 690px) {
      max-width: 23.2rem;
      max-height: 320px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-content: flex-start;
    }
  }
`;

export const SecondGuildContainer = styled(GuildContainer)`
  border-right: 1px solid var(--dark);
  justify-content: center;

  img {
    max-height: 100px;
    min-height: 9rem;
    @media (min-width: 690px) {
      max-height: 250px;
    }
    @media (min-width: 860px) {
      max-height: 400px;
    }
  }
`;

export const GuildTitle = styled.h4`
  background: radial-gradient(circle, #5a40548c 20%, #050303a3 118%);
  color: var(--white);
  border-radius: 5px;
  padding: 5px;
  margin: 3px;
  width: 15.1rem;
  font-family: var(--font);
  @media (max-width: 375px) {
    width: 13.5rem;
  }
  @media (min-width: 690px) {
    width: 10.3rem;
  }
`;

export const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: var(--font);
  padding: 0 5px;

  p,
  h3 {
    background: var(--gradient-brown-dark);
    padding: 1rem;
    border-radius: 15px;
    border: 1px solid var(--brown);
    font-family: var(--font);
    font-size: 1.2rem;
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }

  label {
    color: orange;
    font-family: var(--font);
  }

  h3 {
    margin: 1rem 0;
    font-size: 1.3rem;
  }
`;

export const CardContainer = styled.div`
  @keyframes leftToRight {
    from {
      transform: translateX(-50%);
    }

    to {
      transform: translateX(0);
    }
  }

  width: 400px;
  animation: 2s leftToRight ease;
  margin: 1rem;

  section {
    display: flex;
  }

  h3 {
    background: var(--gradient-brown-dark);
    border: 1px solid var(--brown);
    border-radius: 15px;
    font-size: 28px;
    width: 70%;
    margin: 0 auto;
  }

  img {
    cursor: pointer;
    width: 70%;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--gradient-brown-dark);
  padding: 1rem;
  font-family: var(--font);
  color: white;
  letter-spacing: 1px;
  border-radius: 10px;
  border: 2px solid var(--darkblue);
  animation: 1s vanish;

  @keyframes vanish {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const ContainerRanking = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
