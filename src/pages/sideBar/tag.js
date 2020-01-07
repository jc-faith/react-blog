import React from "react";
import {Link} from 'react-router-dom'

const tags = [
    {tag:'t001',name:'java'},
    {tag:'t002',name:'springBoot'},
    {tag:'t003',name:'Vue'},
    {tag:'t004',name:'ElementUI'},
    {tag:'t005',name:'axios'},
    {tag:'t006',name:'jQuery'},
    {tag:'t007',name:'javaScript'},
    {tag:'t005',name:'nginx'},
    {tag:'t006',name:'webSocket'},
]

const linkCss = {
    color:'#eee',
    display:'inline-block',
    margin:'2px 5px',
    padding:'2px 8px',
    backgroundColor:'#2ba72f',
    textDecoration:'none',
    fontSize:'14px'
}

export default class Tag extends React.Component {
    render() {
        return(
            <div style={{
                width:'100%',
                padding:'0 30px',
                marginTop:'10px',
                boxSizing:'border-box',
                //background:'#fff',
                display:'flex',
                flexDirection:'column',
                textAlign:'left',
            }}>
                <header style={{
                    borderBottom:'2px solid #afb76c',
                    padding:'2px 0',
                    color:'#eee'
                }}>
                    标签云
                </header>
                <main style={{
                    padding:'8px 0'
                }}>
                    {
                        tags.map(el=>{
                            return <Link style={linkCss} to={{ pathname : '/user/article', state : { id: el.tag ,name:el.name}}} key={new Date().getTime()+Math.random().toString()}>{el.name}</Link>
                        })
                    }
                </main>
            </div>
        )
    }
}