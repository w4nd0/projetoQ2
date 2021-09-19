import styled from "styled-components";

export const ExperienceContainer = styled.div`
  font-size: 16px;
  width: 100%;
  margin: 5px auto;

  span {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 27px;
    background: var(--brown);
    border-radius: 50px;
    color: var(--black);
    text-align: center;
    font-size: 14px;
  }

  span:before {
    position: absolute;
    content: "${({ experience }) => `${experience}%`}";
    top: 4.5px;
    left: 4px;
    max-width: 95.5%;
    width: ${({ experience }) => `${experience}%`};
    height: 65%;
    background: var(--darkblue);
    color: white;
    border-radius: 50px;
    animation: bar 2s ease;
    transition: 1s;
  }

  @keyframes bar {
    from {
      width: 0;
    }
  }
`;
