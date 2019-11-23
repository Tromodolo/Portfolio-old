import React from 'react';

import Kurisu from "../kurisu.png";
import Frog from "../frog.gif";

import "./Projects.scss";

export const Projects: React.FC = () => {
	return (
		<div className="projectList">
			<section className="project">
				<img src={Frog} alt="Tro.moe"/>
				<div className="data">
					<header>
						<a href="https://github.com/Tromodolo/Portfolio">Tro.moe</a>
					</header>
					<p>This website.</p>
					<footer>
						<a className="badge badge-ts" href="https://www.typescriptlang.org/">Typescript</a>
						<a className="badge badge-react" href="https://reactjs.org/">React</a>
					</footer>
				</div>
			</section>
			<section className="project">
				<img src={Kurisu} alt="Kurisu"/>
				<div className="data">
					<header>
						<a href="https://github.com/tromodolo/Kurisu-Node">Kurisu</a>
					</header>
					<p>General-use Discord chat bot.<br />Based on the <a href="https://github.com/abalabahaha/eris">Eris</a> library.</p>
					<footer>
						<a className="badge badge-ts" href="https://www.typescriptlang.org/">Typescript</a>
						<a className="badge badge-eris" href="https://abal.moe/Eris/">Eris</a>
					</footer>
				</div>
			</section>
		</div>
	);
};