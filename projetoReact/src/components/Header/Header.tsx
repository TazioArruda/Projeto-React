import imgLogin from "../../assets/user.png";
import menuBar from "../../assets/menu-bar.png";
import seta from "../../assets/down-arrow.png";

import { useContext } from "react";
import { CreateAppContext } from "../../contexts/AppController";
import { HeaderContainer, MenuButton, UserProfile, UserDetails, ArrowIcon } from "./HeaderStyles";

export function Header() {
  const { handleChange } = useContext(CreateAppContext);

  return (
    <HeaderContainer>
      <MenuButton onClick={handleChange}>
        <img src={menuBar} alt="Menu Bar" />
      </MenuButton>

      <UserProfile>
        <img src={imgLogin} alt="User Profile" />
        <UserDetails>
          <span className="userName">Izabel</span>
          <span className="userEmail">Izabel@gmail.com</span>
        </UserDetails>
        <ArrowIcon>
          <img src={seta} alt="Dropdown Arrow" />
        </ArrowIcon>
      </UserProfile>
    </HeaderContainer>
  );
}
