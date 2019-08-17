import React from 'react';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';

export class InformationData extends React.Component<{page: "aboutMe" | "projects"}, {page: "aboutMe" | "projects"}> {
    constructor(props: any){
        super(props);

        this.state = {
            page: props.page || "aboutMe",
        }
    }

    componentWillReceiveProps(props: any){
        this.setState({
            page: props.page || "aboutMe",
        });
    }

    render(){
        switch (this.state.page){
            case "aboutMe":
                return <AboutMe />
            case "projects":
                return <Projects />
            default:
                return <AboutMe />
        }
    }
}