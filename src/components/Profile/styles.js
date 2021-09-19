import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 520px;
  min-height: 494px;
  background: var(--gradient-blue-dark);
  border-radius: 20px;
  justify-content: center;
  margin: 1rem auto;

  div.user-profile {
    display: flex;
    flex-direction: column;
    width: 420px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--brown);
    border-radius: 15px;
    background: var(--gradient-brown-dark);
    color: white;
    margin: 10px;
    animation: 1s fromLeft;
    height: 100%;

    div.info {
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      span {
        margin: 5px 0;
        font-family: var(--font);
        font-size: 16px;
      }

      span:not(:last-child) {
        background: var(--gradient-blue-dark);
        font-size: 18px;
        border-radius: 15px;
        padding: 5px 15px;
      }

      span.lvl,
      span.name,
      span.rank,
      span.cash {
        background: initial;
        color: tomato;
        padding: 0;
      }
    }

    .MuiSvgIcon-root {
      margin: 10px auto;
      width: 50px;
      height: 50px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 100%;
      color: darkgray;
    }
  }

  div.quests-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 259px;

    h2 {
      font-size: 18px;
      background: var(--gradient-brown-dark);
      color: white;
      border-radius: 15px;
      padding: 3px 15px;
    }

    ul {
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      div.quest {
        width: 200px;
        height: 95px;
        display: flex;
        justify-content: center;

        display: flex;
        flex-direction: column;
        max-width: 300px;
        border: 1px solid var(--brown);
        border-radius: 15px;
        text-align: center;
        background: var(--gradient-brown-dark);
        color: white;
        margin: 10px;
        padding: 10px;
        font-family: var(--font);
        animation: 1s fromLeft;

        h3 {
          background: var(--gradient-blue-dark);
          padding: 5px;
          font-size: 1rem;
          font-family: var(--font);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 5px;
        }

        span {
          font-family: var(--font);
        }
      }
    }
  }

  @media (max-width: 1246px) {
    width: 658px;
  }

  @media (max-width: 779px) {
    width: 280px;
    padding: 10px 0;

    div.user-profile {
      width: 257.34px;
    }

    div.quests-container {
      height: unset;
      width: 100%;
      min-width: 257.34px;

      h2 {
        width: 80%;
        text-align: center;
      }

      ul {
        width: 100%;
        display: flex;
        flex-direction: column;

        div.quest {
          width: 80%;
        }

        div.quest:not(:last-child) {
          margin-bottom: 0px;
        }
      }
    }
  }
`;
