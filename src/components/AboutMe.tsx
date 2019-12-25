import React from 'react';

import moment from "moment";
import styled from "@emotion/styled";
import { DarkShadow, Light, Gray, Active, Dark } from 'Theme';

const ProfileContent = styled("div")`
	display: flex;
	flex-direction: row;

	justify-content: space-between;

	width: 100%;
    max-width: 70vw;
	min-width: 300px;

	margin-bottom: 50px;
	margin-top: 50px;

	@media screen and (max-width: 768px){
		flex-direction: column;
	}
`;

const Personal = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin: 18px;
`;

const Me = styled("img")`
	width: 140px;
	height: 140px;

	border-radius: 100%;

	box-shadow: 1px 2px 5px ${DarkShadow};

	@media screen and (max-width: 768px){
		width: 100px;
		height: 100px;
	}
`;

const Name = styled("h2")`
	text-align: center;
    text-shadow: 1px 2px 5px ${DarkShadow};

	margin-bottom: 0px;
`;

const Username = styled("h3")`
	text-align: center;
    text-shadow: 1px 2px 5px ${DarkShadow};
`;

const Age = styled("span")`
	text-align: center;
    text-shadow: 1px 2px 5px ${DarkShadow};
`;

const Information = styled("div")`
	width: calc(100% - 20px);
	min-width: 280px;
	height: auto;

	padding: 10px;

	display: flex;
	flex-direction: row;
	justify-content: space-evenly;

	@media screen and (max-width: 768px){
		flex-direction: column;
	}
`;

const InfoSegment = styled("div")`
	--info-bg: 33, 35, 44;

	background: rgba(var(--info-bg), 0.7);
	border-radius: 15px;

	width: 95%;
	padding: 12px;
	margin-bottom: 14px;

	h2 {
		text-align: center;
	}

	h3 {
		margin-left: 25px;
	}

	@media screen and (max-width: 768px){
		width: calc(100% - 24px);
	}
`;

const StyledList = styled("ul")`
	list-style: none;
	padding-left: 30px;
`;

const LikeItem = styled("li")`
	color: #9cff40;
	margin-bottom: 8px;
`;

const DislikeItem = styled("li")`
	color: #ff4040;
	margin-bottom: 8px;
`;

const AboutItem = styled("li")`
	color: #ccd4db;
	margin-bottom: 8px;
`;

export const AboutMe: React.FC = () => {
	const yearsOld = moment().diff(moment("1998-10-05"), "years");

	return (
		<ProfileContent>
			<Personal>
				<Me src="assets/me.jpg" alt="me!"/>
				<Name>Filip</Name>
				<Username>Tromo</Username>
				<Age>{yearsOld} years old</Age>
			</Personal>
			<Information>
				<div>
					<InfoSegment>
						<h2>About</h2>
						<StyledList>
							<AboutItem>Interested in programming from games</AboutItem>
							<AboutItem>Studied software and web dev</AboutItem>
							<AboutItem>Worked as programmer for 1 year at [REDACTED]</AboutItem>
						</StyledList>
					</InfoSegment>
				</div>
				<div>
					<InfoSegment>
						<h2>Fun Facts</h2>
						<h3>Likes</h3>
						<StyledList>
							<LikeItem>Hawaiian Pizza</LikeItem>
							<LikeItem>Anime and Japanese Culture</LikeItem>
							<LikeItem>Playing games in my free time</LikeItem>
						</StyledList>
						<h3>Dislikes</h3>
						<StyledList>
							<DislikeItem>Any type of seafood</DislikeItem>
							<DislikeItem>Making a like/dislike list. It's hard :(</DislikeItem>
						</StyledList>
					</InfoSegment>
				</div>
			</Information>
		</ProfileContent>
	);
};