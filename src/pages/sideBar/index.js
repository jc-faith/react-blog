import React from "react";
import {Link} from 'react-router-dom'

import Menu from './menu'
import Tag from './tag'

//引入图片
import user from '../../assets/img/user.jpeg';

class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div style={this.props.style}>
                <header style={{
                    //backgroundImage: 'linear-gradient(rgba(19,230,96,0.4) 50%, rgba(14,139,230,0.4) 50%)',
                    flex:'3',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column',
                    minHeight:'320px'
                }}>
                    <img src={user} style={{
                        width:'180px',
                        height:'180px',
                        borderRadius:'50%'
                    }}/>
                    <h3 style={{
                        color:'#eee'
                    }}>咸鱼的博客</h3>
                    <Link  to='/admin' style={{
                        textDecoration:'none',
                        color:'#eee',
                        fontSize:'14px',
                        marginTop:'8px'
                    }}>管理博客</Link>
                </header>
                <section style={{
                    flex:'5',
                    display:'flex',
                    flexDirection:'column',
                    minHeight:'350px'
                }}>
                    <div style={{
                        height:'20px',
                        overflew:'hidden',
                        display:'flex',
                        justifyContent:'center',
                    }}>
                        <input style={{
                            padding:'2px 5px',
                            borderRadius:'5px 0 0 5px',
                            border:'none',
                            backgroundColor:'rgba(85,216,230,0.6)',
                            verticalAlign:'middle'
                        }}/>
                        <button style={{
                            width:'42px',
                            border:'none',
                            borderRadius:'0 5px 5px 0',
                            fontSize:'13px',
                            height:'20px',
                            color:'rgba(85,216,230,0.8)',
                            backgroundColor:'rgba(0,0,249,0.4)',
                            verticalAlign:'middle',
                            textAlign:'center',
                        }}>搜索</button>
                    </div>
                    <Menu></Menu>
                    <Tag></Tag>
                </section>
            </div>
        )
    }
}

export default SideBar