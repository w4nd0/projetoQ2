import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateY(0px)
    }
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px);
    }

    to {
        opacity: 1;
        transform: translateY(0px)
    }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: var(--bg-gradient);
  overflow: hidden;

  div.left-container {
    animation: ${appearFromLeft} 1.5s;
    display: flex;
    flex-direction: column;

    div.description {
      margin: 0 auto;
      width: 50%;
      position: relative;
      top: -25%;
      left: 40%;

      h2 {
        width: 80%;
        padding: 10px;
        border-radius: 15px;
        color: #ffffff99;
      }
    }
  }

  div.right-container,
  div.left-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  div.right-container {
    animation: ${appearFromRight} 1.5s;

    form,
    div.header,
    .MuiFormControl-root,
    input.button,
    p {
      min-width: 256px;
    }

    div.form-container {
      width: 55%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border-radius: 15px;
      background: var(--white);
      min-width: 477px;
      padding: 20px 0;
      box-shadow: 0px 0px 15px 2px #000000;
    }

    div.header {
      width: 87%;
      display: flex;
      justify-content: center;

      img {
        width: 100px;
        height: 100px;
      }

      h1 {
        font-weight: 400;
        margin: 42px 0;
      }
    }

    form {
      display: flex;
      flex-direction: column;

      .MuiInputAdornment-positionEnd svg {
        cursor: pointer;
      }

      .MuiFormControl-root {
        margin-bottom: 20px;
        width: 400px;
      }

      .MuiInputAdornment-positionStart {
        margin-right: 0;
      }

      .MuiOutlinedInput-inputAdornedStart {
        padding-left: 14px;
      }

      .MuiFormHelperText-contained {
        text-align: start;
        margin-left: 3px;
        color: red;
        margin-right: 0px;
      }

      .MuiOutlinedInput-adornedStart {
        padding-left: 18px;
      }

      .MuiOutlinedInput-adornedEnd {
        padding-right: 18px;
      }

      p {
        text-align: end;
        width: 400px;
        margin-bottom: 0;

        a {
          color: var(--link);
        }
      }

      p.MuiFormHelperText-contained {
        width: 256px;
      }

      .button {
        transition: 0.25s;
        border-radius: 10px;
        border: none;
        background: var(--darkblue);
        color: var(--white);
        cursor: pointer;
        width: 400px;
        height: 40px;
        font-size: 18px;
      }

      .button:before {
        z-index: -1;
      }

      .button:hover {
        filter: brightness(85%);
      }

      div.password {
        width: 400px;
        display: flex;
        justify-content: space-between;

        .MuiFormControl-root {
          min-width: 177px;
          width: 190px;
        }
      }
    }
  }

  @media (max-width: 1100px) {
    div.left-container {
      display: none;
    }

    div.right-container form {
      align-items: center;

      .MuiFormControl-root,
      .button,
      p {
        max-width: 80vw;
      }

      div.password {
        max-width: 100%;
        flex-direction: column;
        align-items: center;

        .MuiFormControl-root {
          width: 100%;
          min-width: 256px;
        }
      }
    }
  }

  @media (max-width: 435px) {
    div.right-container div.form-container {
      min-width: initial;
      width: 90%;
      height: initial;
      padding: 0 0 15px 0;

      div.header {
        align-items: center;

        h1 {
          margin: 30px 0;
        }
      }
    }

    div.right-container form {
      max-width: 100vw;

      .MuiOutlinedInput-inputAdornedStart {
        padding: 15px;
      }

      input.button {
        height: 40px;
      }
    }
  }

  @media (max-width: 332px) {
    div.right-container form p {
      text-align: center;
      font-size: 15px;
    }
  }
`;
