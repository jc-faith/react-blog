import React from "react";
import {Link} from 'react-router-dom'
//引入图片
import user from '../../assets/img/user.jpeg';

const linkCss = {
    fontSize:'14px',
    textDecoration:'none',
    color:'#eee',
    padding:'2px 0',
    fontWeight:'500'

}


export default class Menu extends React.Component{
    render() {
        return(
            <div style={{
                width:'100%',
                padding:'15px 30px',
                marginTop:'10px',
                boxSizing:'border-box',
                //background:'#fff',
                display:'flex',
                flexDirection:'column',
                textAlign:'left',
            }}>
                <Link  to='/' style={linkCss}>首页</Link>
                <Link  to='/user/file' style={linkCss}>资源下载</Link>
                <Link  to='/user/msg' style={linkCss}>留言板</Link>
            </div>
        )
    }
}