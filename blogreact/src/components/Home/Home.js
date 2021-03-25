import React from 'react'
import Search from '../search';
import Navbar from './navbar';

const Home = () => {
    return (
        <div className="home-background">
            <Navbar />
            <a href="/Cafe"><p>Cafe</p></a>
            <Search />
        </div>
    )
}

export default Home;
