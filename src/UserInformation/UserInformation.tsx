import React from 'react';
import "./UserInformation.scss";
import { InformationData } from './InformationData';

export class UserInformation extends React.Component<{}, {shownData: "aboutMe" | "projects"}> {
    constructor(props: any){
        super(props);

        this.state = {
            shownData: "aboutMe",
        };

        this.navPress = this.navPress.bind(this);
    }

    navPress(page: "aboutMe" | "projects"){
        this.setState({
            shownData: page,
        })
    }

    render(){
        return (
            <div className="userInfo">
                <div className="navButtons">
                    <ul>
                        <li>
                            <a onClick={(e) => this.navPress("aboutMe")} href="#me" className={this.state.shownData === "aboutMe" ? "active" : ""} >Me</a>
                        </li>
                        <li>
                            <a onClick={(e) => this.navPress("projects")} href="#projects" className={this.state.shownData === "projects" ? "active" : ""} >Projects</a>
                        </li>
                    </ul>
                </div>
                <InformationData page={this.state.shownData} />
            </div>
        );
    }
}