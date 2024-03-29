import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router";

interface NavbarProps {
  toggle?: () => void;
}

const toggleHome = () => {
  scroll.scrollToTop();
};

const Navbar = ({ toggle }: NavbarProps) => {
  const location = useLocation();
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            DIET-GENZ
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="product"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="active"
              >
                {location.pathname === "/company" ? "      " : "Produkt"}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="active"
              >
                {location.pathname === "/company" ? "      " : "Usługi"}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="active"
              >
                {location.pathname === "/company" ? "      " : "O produkcie"}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="active"
              >
                {location.pathname === "/company" ? "      " : "Kontakt"}
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/" onClick={toggleHome}>Sprawdź produkt</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
