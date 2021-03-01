import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    const {name, image, salary}=props.Player;
    const handleAddPlayer=props.handleAddPlayer;
    return (
        <div className="cart">
            <h2>Player Name:  {name}</h2>
            <img src={image} alt=""/>
            <p><small>salary: {salary}</small></p>
            <button onClick={()=>handleAddPlayer(props.Player)} > <FontAwesomeIcon icon={faCheckDouble}/>  Select</button>
        </div>
    );
};

export default Player;
