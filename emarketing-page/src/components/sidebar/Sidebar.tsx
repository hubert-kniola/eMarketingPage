import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElements";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="product" onClick={toggle}>Produkt</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Usługi</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>O produkcie</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Kontakt</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/company" onClick={toggle}>Sprawdź produkt</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
