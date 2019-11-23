import React from 'react';
import { AboutMe } from './AboutMe/AboutMe';
import { Projects } from './Projects/Projects';

export const InformationData: React.FC<{page: "about" | "projects"}> = (props) => {
	switch (props.page){
		case "about":
			return <AboutMe />;
		case "projects":
			return <Projects />;
		default:
			return <AboutMe />;
	}
};
