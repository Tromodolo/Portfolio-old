import React from 'react';

import Kurisu from "./kurisu.png";
import Frog from "./frog.gif";

import "./Projects.scss";

export const Projects: React.FC = () => {
	return (
        <div className="projectList">
            <section className="project">
                <img src={Frog} alt="Tro.moe"/>
                <div className="data">
                    <header>
                        <a href="https://tro.moe/">Tro.moe</a>
                        <span className="badge badge-ts">Typescript</span>
                        <span className="badge badge-react">React</span>
                    </header>
                    <p>This website.</p>
                </div>
            </section>
            <section className="project">
                <img src={Kurisu} alt="Kurisu"/>
                <div className="data">
                    <header>
                        <a href="https://github.com/tromodolo/Kurisu-Node">Kurisu</a>
                        <span className="badge badge-ts">Typescript</span>
                    </header>
                    <p>General-use Discord chat bot.</p>
                </div>
            </section>
        </div>
    );
};