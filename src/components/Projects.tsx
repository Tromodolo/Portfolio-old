import React from 'react';
import styled from "@emotion/styled";

import Kurisu from "assets/kurisu.png";
import Frog from "assets/frog.gif";
import { Dark, Light, Active, TypescriptColor, TypescriptText, ReactColor, ReactText, ErisColor, ErisText } from 'Theme';

const ProjectList = styled("div")`
	display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 30px;
`;

const Project = styled("section")`
	min-width: 280px;
	max-width: 80vw;
	margin: 12px;
	padding: 10px;
	border-radius: 9px;

	position: relative;
	top: 0px;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	background: ${Dark};

  	box-shadow: 0 1.5rem 1.5rem -1.25rem rgba(10, 10, 10, .05);
	transition-duration: 86ms;
	transition-property: transform;

	&:hover{
		transform: translateY(-5%);
	}
`;

const ProjectImage = styled("img")`
	height: 60px;
	width: 60px;
	margin-right: 10px;
	border-radius: 100%;
`;

const ProjectData = styled("div")`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	header{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		font-size: 16px;
		line-height: 1.5;

		a{
			font-size: 22px;
			user-select: none;
			cursor: pointer;
			color: ${Light};
			text-decoration: none;

			&:hover{
				color: ${Active};
			}
		}
	}
	p{
		color: rgba(${Light}, 0.7);
		max-width: 300px;

		a{
			color: ${Light};
			text-decoration: none;

			&:hover{
				color: ${Active};
			}
		}
	}
`;

const Badge = styled("a")`
	display: inline-block;

    font-size: 0.8rem;
    padding: 5px;
    border-radius: 10px;
    margin-right: 7px;

	font-weight: bold;

	cursor: pointer;
	text-decoration: none;

	&:hover{
		filter: brightness(0.9);
	}

    &.badge-ts{
        background: ${TypescriptColor};
		color: ${TypescriptText};
    }

    &.badge-react{
        background: ${ReactColor};
        color: ${ReactText};
    }

	&.badge-eris {
		background: ${ErisColor};
        color: ${ErisText};
	}
`;

export const Projects: React.FC = () => {
	return (
		<ProjectList>
			<Project>
				<ProjectImage src={Frog} alt="Tro.moe"/>
				<ProjectData>
					<header>
						<a href="https://github.com/Tromodolo/Portfolio">Tro.moe</a>
					</header>
					<p>This website.</p>
					<footer>
						<Badge className="badge badge-ts" href="https://www.typescriptlang.org/">Typescript</Badge>
						<Badge className="badge badge-react" href="https://reactjs.org/">React</Badge>
					</footer>
				</ProjectData>
			</Project>
			<Project>
				<ProjectImage src={Kurisu} alt="Kurisu"/>
				<ProjectData>
					<header>
						<a href="https://github.com/tromodolo/Kurisu-Node">Kurisu</a>
					</header>
					<p>General-use Discord chat bot.<br />Based on the <a href="https://github.com/abalabahaha/eris">Eris</a> library.</p>
					<footer>
						<Badge className="badge badge-ts" href="https://www.typescriptlang.org/">Typescript</Badge>
						<Badge className="badge badge-eris" href="https://abal.moe/Eris/">Eris</Badge>
					</footer>
				</ProjectData>
			</Project>
		</ProjectList>
	);
};