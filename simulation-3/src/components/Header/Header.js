import React, { Component } from 'react'

export default class Header extends Component {
    render(){
    return (
        <div className="header">
            <div className="header_left">
                <h1 className="header_name">Helo</h1>
                <img className="icon" src="./../../assets/home.png" alt="" />
                <img className="icon" src="./../../assets/search.png" alt="" />
            </div>
            <div className="header_middle">
                <h4 className="dashboard">Dashboard</h4>
            </div>
            <div className="header_right">
                <h4 className="logout_text">Logout</h4>
            </div>
        </div>
        )
    }
}

