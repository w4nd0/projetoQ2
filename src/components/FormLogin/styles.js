import styled, { keyframes } from "styled-components";

const appearFromCenter = keyframes`
    from {
        opacity: 0;
        transform: translateX(0px);
    }

    to {
        opacity: 1;
        transform: translateY(0px)
    }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--bg-gradient);
  background: var(--gradient-brown-dark);

  div.form {
    height: 504px;
    display: flex;
    justify-content: center;
    animation: ${appearFromCenter} 1.5s;
  }

  img {
    width: 100px;
    height: 100px;
    position: relative;
    top: -45px;
    left: 55px;
  }

  form {
    background: var(--white);
    border-radius: 15px;
    padding: 0px 100px;
    justify-content: center;
    width: 550px;
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    max-height: 504px;
    box-shadow: 0px 0px 15px 2px #000000;

    h2 {
      margin-bottom: 60px;
      width: 221px;
    }

    .MuiFormControl-root {
      margin-bottom: 20px;
    }

    .MuiInputAdornment-positionStart {
      margin-right: 0;
    }

    .MuiOutlinedInput-inputAdornedStart {
      padding-left: 14px;
    }

    .MuiInputAdornment-positionEnd {
      cursor: pointer;
    }

    .MuiFormHelperText-contained {
      //z-index: -1;
      text-align: start;
      margin-left: 3px;
      color: red;
      margin-right: 0px;
    }

    input.button {
      transition: 0.25s;
      border-radius: 3px;
      border: none;
      background: var(--brown);
      color: var(--white);
      cursor: pointer;
      height: 40px;
      font-size: 18px;
      border-radius: 10px;
    }

    input.button:hover {
      filter: brightness(85%);
    }

    p {
      text-align: end;

      a {
        color: var(--link);
      }
    }
  }

  @media (max-width: 830px) {
    img {
      top: -44px;
      left: -45px;
    }

    form {
      margin-right: 0;
      margin-left: -100px;
      min-width: 80vw;
      padding: 0;
      max-width: 40vw;
      align-items: center;

      .MuiTextField-root,
      input.button {
        width: 70vw;
      }
    }
  }

  @media (max-width: 435px) {
    div.form {
      height: initial;
    }

    form {
      h2 {
        margin: 30px 0 40px 0;
      }

      p {
        font-size: 15px;
      }
    }
  }
`;

export const LogoImg = styled.img`
  width: 500px !important;
  height: 500px !important;
  margin-top: 69px;

  @media (max-width: 800px) {
    display: none !important;
    width: 50px;
  }
`;
