import React from 'react';
import Aux from '../Aux/Aux';
import './Mobile.css'

const Mobile = (props) => {


    return(
        <Aux>
            <div className="mobile">
                <h1>Company: {props.company}</h1>
                <h1>Model: {props.model}</h1>
                <h1>RAM: {props.ram}</h1>
                <h1>Waterproof: {props.waterproof? "YES" : "NO"}</h1>
                <h1>Multi-camera setup: {props.multicamerasetup? "YES" : "NO"}</h1>
                <h1>International warrenty: {props.internationalwarrenty? "YES" : "NO"}</h1>
                <h1>Retina scan: {props.retinascan? "YES" : "NO"}</h1>
                <h1>Exynox: {props.exynox? "YES" : "NO"}</h1>
                <h1>Snapdragon: {props.snapdragon? "YES" : "NO"}</h1>
                <h1>Gorilla glass: {props.gorillaglass? "YES" : "NO"}</h1>
                <h1>Wireless charging: {props.wirelesscharging? "YES" : "NO"}</h1>
            </div>
        </Aux>    
    );
}

export default Mobile;