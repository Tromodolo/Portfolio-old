import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styled from "@emotion/styled";
import { DarkShadow, Light, Gray, Active, Dark } from 'Theme';

const ProfileContent = styled("section")`
	text-align: center;
    text-shadow: 1px 2px 5px ${DarkShadow};
    color: ${Light};
`;

const Title = styled("h1")`
	font-size: 2.4rem;
`;

const Description = styled("span")`
	color: ${Gray};
	font-size: 20px;
	line-height: 1.5;
`;

const Socials = styled("div")`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
 	margin-top: 15px;
`;

const SocialLink = styled("a")`
	display: inline-block;
	height: 38px;
	width: 38px;
	border-radius: 100%;
	background: ${Gray};
	color: ${Dark};

	svg{
		margin: 20%;

		width: 60%;
		height: 60%;
	}

	&:hover {
		background: ${Active};
	}
`;

export const AboutMe: React.FC = () => {
	return (
		<ProfileContent>
			<Title>Tromo</Title>
			{/* <h2>(Filip Ekström)</h2> */}
			<Description>Web Developer and Game Enthusiast</Description>
			<Socials>
				<SocialLink href="https://twitter.com/tromodolo">
					<FontAwesomeIcon icon={faTwitter} />
				</SocialLink>
				<SocialLink href="https://github.com/tromodolo">
					<FontAwesomeIcon icon={faGithub} />
				</SocialLink>
				<SocialLink href="mailto:Filip.ekstrom98@gmail.com">
					<FontAwesomeIcon icon={faEnvelope} />
				</SocialLink>
				<SocialLink href="https://discord.gg/vevHucW">
					<FontAwesomeIcon icon={faDiscord} />
				</SocialLink>
			</Socials>
		</ProfileContent>
	);
};