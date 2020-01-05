import React from "react";

export default class MessageBoard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return(
            <h1>文章显示:{this.props.location}</h1>
        )
    }
}