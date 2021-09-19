import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  border-radius: 15px;
  background: var(--gradient-blue-dark);
  color: #fff;
  width: 320px;
  padding: 10px;

  h3 {
    width: 100%;
    font-family: var(--font);
    background: var(--gradient-brown-dark);
    text-align: center;
  }

  img {
    max-height: 130px;
  }

  div.infoGild {
    display: flex;
    margin: 5px;

    div {
      margin-left: 15px;
    }
  }

  @media (max-width: 374px) {
    width: 260px;
  }
`;
