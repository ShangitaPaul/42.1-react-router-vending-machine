import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

function Snack1() {
    return (
        <div className="Snack1">
            <h1>Snack1</h1>
            <Link to="/">Go back</Link>
        </div>
    );
}

export default Snack1;