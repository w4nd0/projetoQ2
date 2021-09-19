import React from 'react';
import NavMenu from '../NavMenu';
import { StyledBurger } from './styles';

const MenuBurger = ({ isOpen, setIsOpen })=>{
  const handlerMenu = ()=>{
		setIsOpen(!isOpen);
	}
  
  return(
    <>
      <StyledBurger isOpen = { isOpen } onClick = { handlerMenu }>
        <div/>
        <div/>
        <div/>
      </StyledBurger>
      <NavMenu isOpen = { isOpen }/>
    </>
  );
}

export default MenuBurger;