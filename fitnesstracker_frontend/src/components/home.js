import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to FitnessTrackr!</h1>
            <button>
                <Link to='/login'>Login</Link>
            </button>

            <button>
            <Link to='/routines'>Routines</Link>
            </button>

            <button>
            <Link to='/user'>User</Link>
            </button>

            <button>
            <Link to='/activities'>Activities</Link>
            </button>

            <button>
            <Link to='/myroutines'>My Routines</Link>
            </button>
            <br></br>

        </div>
    )
}

export default Home;