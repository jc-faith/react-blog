import React from "react";
import {withRouter} from 'react-router-dom'

class FileDown extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
    }
    componentWillUnmount() {
        console.log(this.props.location.state)
    }

    render() {
        return(
            <h1>文章内容:{this.props.location.state ? this.props.location.state.name : ''}</h1>
        )
    }
}
export default withRouter(FileDown)