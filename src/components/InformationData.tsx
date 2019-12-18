import React from 'react';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';

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
