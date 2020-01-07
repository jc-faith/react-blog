import React from "react";
import {
    BrowserRouter as Router ,
    Route ,
    Switch ,
    Redirect
} from 'react-router-dom'


//引入页面组件
import SideBar from "../sideBar";
import FileDown from "../file";
import MessageBoard from "../message";
import Article from '../article'
//引入图片
import home_bg from '../../assets/img/home_bg.jpg';
import Admin from "../admin";

class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div
                style={{
                    height:'100%',
                    width:'100%',
                    background:`url(${home_bg}) 100% 100% no-repeat`,
                    boxSizing:'border-box',
                    display:'flex'
                }}
            >
                <SideBar style={{
                    flex:'2',
                    height:'100%',
                    backgroundColor:'rgba(85,216,230,0.4)',
                    display:'flex',
                    flexDirection:'column'
                }}
                >
                </SideBar>
                <main style={{
                    flex:'7',
                    height:'100%',
                    backgroundColor:'rgba(255,255,255,0.2)',
                    padding:'0 30px',
                    overflowX:'auto'
                }}
                >
                    <Switch>
                        <Route path='/user/article'><Article/></Route>
                        <Route path='/user/file'><FileDown/></Route>
                        <Route path='/user/msg'><MessageBoard/></Route>
                        <Route exact path='/user'>
                            <Redirect to='/user/article'/>
                        </Route>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default User;