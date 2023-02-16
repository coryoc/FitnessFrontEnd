import React from 'react';
import { Link } from 'react-router-dom';

const Routines = () => {
    return (
        <div>
            <h1>Welcome to FitnessTrackr!</h1>
            <button>
                <Link to='/login'>Login</Link>
                <Link to='/home'>Home</Link>
            </button><br></br>
            <h3> Public Routines will live here!</h3>
            
        </div>
    )
}

export default Routines;