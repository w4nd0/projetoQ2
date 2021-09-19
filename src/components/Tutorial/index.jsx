import React from "react";
import itens from "../Tutorial/itens";
import Card from "./Card";
import { StyledDiv } from "./styles";

const Tutorial = () => {
  return (
    <StyledDiv>
      <h1>Tutorial</h1>
      {itens.map((item, index) => (
        <Card
          key={index}
          img_url={item.img_url}
          title={item.title}
          description={item.description}
        />
      ))}
    </StyledDiv>
  );
};

export default Tutorial;
