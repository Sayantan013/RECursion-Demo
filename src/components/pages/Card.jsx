import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className = 'card-container'>
            <div className="image-container">
                <img src="" alt=""/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>Mission</h3>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus est expedita culpa et laudantium vero ipsam a adipisci, in ullam molestias consequuntur mollitia laboriosam enim eos labore, possimus facere!</p>
                </div>
            </div>
            <div className="btn">
                    <button>
                        <a >View More</a>
                    </button>
            </div>
        </div>
    )
}

export default Card
