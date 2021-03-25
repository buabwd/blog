import React from 'react'

const search = () => {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <h1 class="banner-title">
                        <span>Review.</span> Cafe
                </h1>
                    <p>everything that you what to know about Cafe</p>
                    <form>
                        <input type="text" className="search-input" placeholder="Find your Cafe . . ."></input>
                        <botton type="submit" className="search-btn">
                            <i className="fas fa-search"></i>
                        </botton>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default search
