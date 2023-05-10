import '../style/movie.css';
import { useState, useEffect} from 'react'

export default function MovieBlock(props){
    const id = props.id;
    const movieName = props.name;
    const director = props.director;
    const rating = props.rating;
    const release = props.release;
    const desc = props.desc;
    
    const hello = (i) => {
        //Send to movie specific webpage
        console.log(i);
    };

    return (
        <div className = "movieBlock" onClick={e => hello(id)}>
            <div className = "blockFormat">
                <h2 className = "movieTitle">{movieName}</h2>
                <p>{director}</p>
                <p>{release}</p>
                <p>{desc}</p>
                <div className = "rating">
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
}