import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

function Snack3() {
    return (
        <div className="Snack3">
            <h1>Snack3</h1>
            <Link to="/">Go back</Link>
        </div>
    );
}

export default Snack3;