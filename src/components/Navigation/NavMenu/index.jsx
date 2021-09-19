import React from "react";
import { FaHome } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useInfoUser } from "../../../provider/user";
import { StyledUl } from "./styles";
import { BiShoppingBag, BiGroup } from "react-icons/bi";
import { IoMdSettings, IoMdHelp } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const NavMenu = ({ isOpen }) => {
  const { logout } = useInfoUser();

  const history = useHistory();

  const handlePath = (path) => {
    history.push(path);
  };

  return (
    <StyledUl isOpen={isOpen}>
      <li onClick={() => handlePath("/dashboard")}>
        <span>
          <FaHome />
        </span>{" "}
        HOME
      </li>
      <li onClick={() => handlePath("/tutorial")}>
        <span>
          <IoMdHelp />
        </span>{" "}
        Tutorial
      </li>
      <li onClick={() => handlePath("/guildboard")}>
        <span>
          <BiGroup />
        </span>{" "}
        Guilds
      </li>
      <li onClick={() => handlePath("/shop")}>
        <span>
          <BiShoppingBag />
        </span>{" "}
        Shop
      </li>
      <li onClick={() => handlePath("/settings")}>
        <span>
          <IoMdSettings />
        </span>{" "}
        Settings
      </li>
      <li onClick={logout}>
        <span>
          <FiLogOut />
        </span>{" "}
        Logout
      </li>
    </StyledUl>
  );
};

export default NavMenu;
