import React from "react";
import "./content.scss";

import Kurisu from "../assets/kurisu.png";

const Content = () => {
	const projects = [
		{
			name: "Kurisu",
			image: Kurisu,
			imageAlt: "Drawn art of character",
			url: "https://github.com/tromodolo/Kurisu",
			description: "General use Discord chat bot, developed to expand on my Discord server.",
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
								My experience mostly with frontend, as that is where most of my work lies.
								<br />
								<span className="experience">Experience</span>: HTML, CSS, Javascript, Typescript, Angular, React.
							</p>
							<p>
								However, my backend knowledge keeps growing all the time, as I get more responsibilities.
								<br />
								<span className="experience">Experience</span>: C#, ASP.Net Core, SQL, REST
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