import React from "react";
import "./header.scss";

import {
	FaDiscord,
	FaTwitter,
	FaGithub,
	FaAt,
} from "react-icons/fa";

const Header: React.FC = () => {
	return (
		<section className="content">
			<h1 className="title">Tromo</h1>
			<h2 className="description phonics">/tromoe/</h2>
			<span className="description">Web Developer and Tech Enthusiast</span>
			<ul className="social-list">
				<li className="social-media">
					<a href="https://discord.gg/vevHucW">
						<FaDiscord size={40} />
						<span>Discord Server</span>
					</a>
				</li>
				<li className="social-media">
					<a href="https://twitter.com/tromodolo">
						<FaTwitter size={40} />
						<span>Twitter</span>
					</a>
				</li>
				<li className="social-media">
					<a href="https://github.com/tromodolo">
						<FaGithub size={40} />
						<span>Github</span>
					</a>
				</li>
				<li className="social-media">
					<a href="mailto:Filip.ekstrom98@gmail.com">
						<FaAt size={40} />
						<span>Contact Me</span>
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Header;