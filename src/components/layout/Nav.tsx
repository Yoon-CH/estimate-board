import React, { useState } from 'react';
import styled from 'styled-components';
import { COLOR, DEVICE } from 'constants/';
import { Building, Hamburger, LogoText } from 'images';
import { SideNav } from './SideNav';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavContainer>
      <HamburgerImage src={Hamburger} alt="hamburger" onClick={handleOpen} />
      <Logo src={LogoText} alt="logo" />
      <MenuList>
        <li>
          <BuildingImage src={Building} alt="building" /> A 가공업체
        </li>
        <li>로그아웃</li>
      </MenuList>
      <SideNav isOpen={isOpen} handleOpen={handleOpen} />
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 70px;
  background: ${COLOR.BLUE};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  @media ${DEVICE.SMALL} {
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  height: 20px;
  width: 153px;
`;

const MenuList = styled.ul`
  display: flex;
  color: #fff;
  font-size: 14px;
  li {
    color: #fff;
    cursor: pointer;

    & + li {
      position: relative;
      margin-left: 20px;
      padding-left: 20px;

      &::before {
        content: '';
        width: 2px;
        height: 16px;
        background-color: #fff;
        position: absolute;
        left: 0;
      }
    }
  }
  @media ${DEVICE.SMALL} {
    & {
      display: none;
    }
  }
`;

const BuildingImage = styled.img`
  width: 15px;
  margin-right: 0.5rem;
`;

const HamburgerImage = styled.img`
  display: none;
  width: 24px;
  height: 18px;
  margin-right: 19px;
  cursor: pointer;
  @media ${DEVICE.SMALL} {
    display: block;
  }
`;
