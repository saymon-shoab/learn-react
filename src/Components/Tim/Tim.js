import React from 'react';
import './Tim.css'

const Tim = (props) => {
    const tim = props.tim;
    let totalSalary = 0;
    for (let i = 0; i < tim.length; i++) {
        const Player = tim[i];
        totalSalary = totalSalary + Player.salary;
        
    }
   

    return (
        <div>
            <h2> Tim Members: {tim.length}</h2>
            <p>Total Salary:  ${totalSalary}</p>
            <p> Total Budget: ${totalSalary}</p>
        </div>
    );
};

export default Tim;