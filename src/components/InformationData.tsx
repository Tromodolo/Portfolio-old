import React from 'react';
import { Home } from './Home';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';

export const InformationData: React.FC<{page: "home" | "about" | "projects"}> = (props) => {
	switch (props.page){
		case "home":
			return <Home />;
		case "about":
			return <AboutMe />;
		case "projects":
			return <Projects />;
		default:
			return <AboutMe />;
	}
};
