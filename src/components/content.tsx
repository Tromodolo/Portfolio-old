import React from "react";
import "./content.scss";

import Kurisu from "../assets/kurisu.png";
import Tsuyu from "../assets/tsuyu.png";
import PageIcon from "../assets/icon.png";

const Content = () => {
	const projects = [
		{
			name: "Kurisu",
			image: Kurisu,
			imageAlt: "Drawn art of character",
			url: "https://github.com/tromodolo/Kurisu",
			description: "General use Discord chat bot, developed to expand on my Discord server.",
		},
		{
			name: "Portfolio",
			image: PageIcon,
			imageAlt: "Icon for this website",
			url: "https://github.com/tromodolo/portfolio",
			description: "This.",
		},
		{
			name: "tsuyu",
			image: Tsuyu,
			imageAlt: "Japanese text for 'tsuyu'",
			url: "https://github.com/tromodolo/tsuyu",
			description: "File-uploading service made using Rustlang and react",
		},
	];

	const renderProjects = () => {
		return projects.map((x, i) => {
			return (
				<a className="project" key={i} href={x.url}>
					<div className="project-metadata">
						<img src={x.image} alt={x.imageAlt}/>
						<span className="project-title">{x.name}</span>
					</div>
					<span className="project-description">{x.description}</span>
				</a>
			);
		});
	};

	return (
		<main>
			<div className="main-content">
				<div className="main-content-inner">
					<article className="segment">
						<h3 className="segment-title">About Me</h3>
						<span className="segment-content">
							<br />
							<p>Web developer from the cozy town of Karlstad, Sweden</p>
							<p>New to the development industry but willing and wanting to learn.</p>
							<p>Fan of videogames, watching tv shows and learning about other cultures. Recently starting to read more books.</p>
							<p>This website isn't meant for anything serious, just fun.</p>
						</span>
					</article>
					<article className="segment">
						<h3 className="segment-title">Skills</h3>
						<span className="segment-content">
							<br />
							<p>
								<h4 className="experience">Frontend knowledge:</h4>
								HTML, CSS, Javascript, Typescript, React, React-Native
							</p>
							<p>
								<h4 className="experience">Backend knowledge:</h4>
								C#, ASP.Net Core, SQL, REST
							</p>
						</span>
					</article>
				</div>
				<div className="main-content-inner">
					<article className="projects">
						<h3 className="segment-title projects-title">Things I've Made</h3>
						<div className="projects-list">{renderProjects()}</div>
					</article>
				</div>
			</div>
		</main>
	);
};

export default Content;