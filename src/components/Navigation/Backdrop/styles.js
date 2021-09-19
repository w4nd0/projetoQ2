import styled from 'styled-components';

export const StyledBackdrop = styled.div`
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: rgba(0,0,0,.4);
	animation: changeBackdrop .5s ease-in-out;

	@keyframes changeBackdrop{
		0% {
			background-color: rgba(0,0,0,.0);
		}

		100% {
			background-color: rgba(0,0,0,.4);
		}
	}
`;