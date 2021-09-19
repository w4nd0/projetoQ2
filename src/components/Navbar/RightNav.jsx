import { UlContainer } from "./styles";
import { useHistory } from "react-router-dom";
import { useInfoUser } from "../../provider/user";

const RightNav = ({ open }) => {
  const { logout } = useInfoUser();

  const history = useHistory();

  const handlePath = (path) => {
    history.push(path);
  };

  return (
    <UlContainer open={open}>
      <li onClick={() => handlePath("/tutorial")}>Tutorial</li>
      <li onClick={() => handlePath("/guilds")}>Guilds</li>
      <li onClick={() => handlePath("/shop")}>Shop</li>
      <li onClick={logout}>Logout</li>
    </UlContainer>
  );
};

export default RightNav;
