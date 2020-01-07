import React from "react";
import {withRouter} from 'react-router-dom'

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        let user = localStorage.getItem('user');
        if(!user){
            this.props.history.push('/login')
        }
    }
    render() {
        return(
            <h1>Admin</h1>
        )
    }
}
export default withRouter(Admin)