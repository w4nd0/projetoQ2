import React from 'react';
import { StyledBackdrop } from './styles';

const Backdrop = ({ isOpen, setIsOpen })=>{

	React.useEffect(()=>{
		document.body.style.overflow = 'hidden';
		return ()=> document.body.style.overflow = 'unset';
	}, []);

	const handlerMenu = ()=>{
		setIsOpen(!isOpen);
	}

	return <StyledBackdrop onClick = { handlerMenu }></StyledBackdrop>
}

export default Backdrop;