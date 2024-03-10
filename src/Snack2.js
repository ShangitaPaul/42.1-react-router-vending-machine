import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

function Snack2() {
    return (
        <div className="Snack2">
            <h1>Snack2</h1>
            <Link to="/">Go back</Link>
        </div>
    );
}

export default Snack2;
