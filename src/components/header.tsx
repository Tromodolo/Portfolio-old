import React from "react";
import "./header.scss";

import Discord from "../assets/discord.svg"
import Twitter from "../assets/twitter.svg"
import Github from "../assets/github.svg"
import Mail from "../assets/mail.svg"

const Header: React.FC = () => {
	return (
		<section className="content">
			<h1 className="title">Tromo</h1>
			<h2 className="description phonics">/tromoe/</h2>
			<span className="description">Web Developer and Tech Enthusiast</span>
			<ul className="social-list">
				<li className="social-media">
					<a href="https://discord.gg/vevHucW">
						<img src={Discord} alt="Discord Logo"/>
						Discord Server
					</a>
				</li>
				<li className="social-media">
					<a href="https://twitter.com/tromodolo">
						<img src={Twitter} alt="Twitter Logo"/>
						Twitter
					</a>
				</li>
				<li className="social-media">
					<a href="https://github.com/tromodolo">
						<img src={Github} alt="Github Logo"/>
						Github
					</a>
				</li>
				<li className="social-media">
					<a href="mailto:Filip.ekstrom98@gmail.com">
						<img src={Mail} alt="Letter Icon"/>
						Contact Me
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Header;