import React from 'react';
import { UserInformation } from './components/UserInformation';
import honk from "assets/honk.png";

import styled from "@emotion/styled";
import { CanvasEffect } from 'components/CanvasEffect';

// linear-gradient(45deg, rgba($dark-gradient, 0.65), rgba($dark, 0.70)),
const AppContent = styled("div")`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("assets/wallhaven-j5loe5.jpg");
    background-size: cover;
    background-position-x: 40%;
`;

const Chen = styled("img")`
	position: absolute;
    height: 100px;
    width: auto;
    bottom: 0;
    left: 35%;
	cursor: pointer;

	@media screen and (max-width: 768px){
		transform: rotate(180deg);

		top: 0px;
		bottom: initial;
	}
`;

const App: React.FC = () => {
	const honkhonk = () => {
		const audio = new Audio('assets/honk.mp3');
		audio.volume = 0.08;
		audio.play();
	};

	return (
		<AppContent>
			<CanvasEffect />
			<UserInformation />
			<Chen src={honk} alt="Chen" onClick={() => honkhonk()}/>
		</AppContent>
	);
};

export default App;
