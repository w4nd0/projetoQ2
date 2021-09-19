import { BurgerMenu } from "./styles";
import RightNav from "./RightNav";
import { useState } from "react";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerMenu>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
