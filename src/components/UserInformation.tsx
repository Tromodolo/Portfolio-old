import React, { useState } from 'react';
import { InformationData } from './InformationData';
import styled from "@emotion/styled";
import { Light, Active } from 'Theme';

type Page = "about" | "projects";

const UserInfo = styled("div")`
	height: 100%;
    width: 100%;
	padding-top: 200px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const NavButtons = styled("div")`
	list-style: none;
    user-select: none;
    padding-left: 0px;
`;

const NavList = styled("ul")`
	padding: 0;
`;

const NavListItem = styled("li")`
	margin: 15px;
	display: inline;
`;

const NavButton = styled("a")`
	position: relative;
	color: ${Light};
	text-decoration: none;
	font-size: 1.3rem;

	&::before, &::after{
		position: absolute;
		-webkit-transition: all 0.35s ease;
		transition: all 0.35s ease;
	}

	&::before{
		left: 0;
		bottom: -7px;
		display: block;
		height: 2px;
		width: 0%;
		content: "";
		background-color: ${Active};

		box-shadow: ${Active} 0px 0px 16px;
	}

	&::after{
		left: 0;
		bottom: -7px;
		padding: 0.5em 0;
		position: absolute;
		content: attr(data-hover);
		color: ${Active};
		white-space: nowrap;
		max-width: 0%;
		overflow: hidden;
	}

	&:hover, &.active{
		cursor: pointer;

		&::before{
			opacity: 1;
			width: 100%;
		}

		&::after{
			max-width: 100%;
		}
	}
`;

export const UserInformation: React.FC  = () => {
	const [page, setPage] = useState<Page>("about");

	const pages: Array<{name: Page, text: string}> = [{
		name: "about",
		text: "Me",
	},
	{
		name: "projects",
		text: "Projects",
	}];

	const renderPages = () => {
		return pages.map((x) => {
			return (
				<NavListItem key={x.name}>
					<NavButton onClick={() => setPage(x.name)} href={"#" + x.name} className={page === x.name ? "active" : ""} >
						{x.text}
					</NavButton>
				</NavListItem>
			);
		});
	};

	return (
		<UserInfo>
			<NavButtons>
				<NavList>
					{renderPages()}
				</NavList>
			</NavButtons>
			<InformationData page={page} />
		</UserInfo>
	);
};
