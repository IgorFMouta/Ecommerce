import React from 'react'
import logo from "../img/logo.png"
import {Div,H1} from "./styles"

 const  Header = () => {
    return (
        
        <H1>
            <Div className="header">
                    <img className="logo" src={logo} alt="Umbreon Logo" width ="60px" height ="60px"/>
                <button className="salmon-btn">+ INFO</button>
            </Div>
        </H1>
    )
}
export default Header;
