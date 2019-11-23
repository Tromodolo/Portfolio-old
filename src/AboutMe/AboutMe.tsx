import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./AboutMe.scss";

export const AboutMe: React.FC = () => {
	return (
		<section id="me">
			<h1>Tromo</h1>
			{/* <h2>(Filip Ekström)</h2> */}
			<span className="description">Web Developer and Game Enthusiast</span>
			<div className="socialLinks">
				<a className="socialLink" href="https://twitter.com/tromodolo">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a className="socialLink" href="https://github.com/tromodolo">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a className="socialLink" href="mailto:Filip.ekstrom98@gmail.com">
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
				<a className="socialLink" href="https://discord.gg/vevHucW">
					<FontAwesomeIcon icon={faDiscord} />
				</a>
			</div>
		</section>
	);
};