import React from 'react'
import { Link,Switch } from 'react-router-dom';


const navbar = () => {
    return (
        <Switch>
        <div>
            <div className="navbar">
                <div className="container">
                    <Link to="Cafe review.html" className="navbar-brand">Cafe Review</Link>
                    <div className="navbar-nav">
                        <Link to="/">Home</Link>
                        <br></br>
                        <Link to="/Cafe">Cafe</Link>
                        <br></br>
                        <Link to="/Favorite">Favorite Cafe</Link>
                        <br></br>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
        </Switch>
    )
}

export default navbar;
