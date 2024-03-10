import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <h1>Vending Machine</h1>
            <Link to="/Snack1">Snack1</Link>
            <Link to="/Snack2">Snack2</Link>
            <Link to="/Snack3">Snack3</Link>
        </div>
    );
}
export default VendingMachine;