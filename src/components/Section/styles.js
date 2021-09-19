import styled from "styled-components";

export const StyledSection = styled.section`
  /* background-image: linear-gradient(to bottom left, #2c296d 0%, #21222d 25%); */

  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* max-width: 1300px; */
  margin: 0 auto;
  flex-wrap: wrap;

  padding: 100px 0 0 40px;

  /* padding-top: 100px; */

  @media (min-width: 768px) {
    flex-direction: row;
    /* align-items: stretch; */
  }
`;
