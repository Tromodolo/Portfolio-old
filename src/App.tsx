import React from "react";

import "app.scss";
import honk from "assets/honk.png";

import Header from "components/header";
import Content from "components/content";

const App: React.FC = () => {
	const honkhonk = () => {
		const audio = new Audio("assets/honk.mp3");
		audio.volume = 0.08;
		audio.play();
	};

	return (
		<section className="app-content">
			<header className="header-content">
				<Header />
			</header>
			<Content />
			<img className="chen" src={honk} alt="Girl on bicycle honking" onClick={() => honkhonk()}/>
		</section>
	);
};

export default App;
