import React from 'react';
import "./App.scss";
import { UserInformation } from './UserInformation/UserInformation';
import honk from "./honk.png";

const App: React.FC = () => {
	return (
		<div className="App">
    		<UserInformation />
            <img src={honk} className="chen" alt=""/>
		</div>
	);
};

export default App;
