import React from 'react';
import Backdrop from '../Backdrop';
import MenuBurger from '../MenuBurguer';
import { StyledNav } from './styles';

const Nav = ({children})=>{
  const [isOpen, setIsOpen] = React.useState(false);

	return(
    <>
      <StyledNav>
        <MenuBurger isOpen = { isOpen } setIsOpen = { setIsOpen }/>
      </StyledNav>
      { isOpen ? <Backdrop isOpen = { isOpen } setIsOpen = { setIsOpen }/> : '' }
      {children}
    </>
	);
}

export default Nav;