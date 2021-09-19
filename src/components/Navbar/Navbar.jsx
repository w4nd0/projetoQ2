import { NavContainer } from "./styles";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="logo" />
      <Burger />
    </NavContainer>
  );
};

export default Navbar;
    