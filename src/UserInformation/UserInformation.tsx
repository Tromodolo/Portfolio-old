import React, { useState } from 'react';
import "./UserInformation.scss";
import { InformationData } from '../InformationData';

type Page = "about" | "projects";

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
				<li key={x.name}>
					<a onClick={() => setPage(x.name)} href={"#" + x.name} className={page === x.name ? "active" : ""} >{x.text}</a>
				</li>
			);
		});
	};

	return (
		<div className="userInfo">
			<div className="navButtons">
				<ul>
					{renderPages()}
				</ul>
			</div>
			<InformationData page={page} />
		</div>
	);
};
