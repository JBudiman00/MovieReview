import '../style/movie.css';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react'

export default function MovieBlock(props){
    const id = props.id;
    const movieName = props.name;
    const director = props.director;
    const rating = props.rating;
    const release = props.release;
    const desc = props.desc;
    
    const onClick = (i) => {
        //Send to movie specific webpage
        //window.location.href='http://localhost:3000/moviepage/' + i;
        //this.context.router.push('/moviepage/' + i);
    };

    return (
        <div className = "movieBlock" >
            <Link to={'/moviepage/' + id} className='linkClass'>
                <div className = "blockFormat">
                    <h2 className = "movieTitle">{movieName}</h2>
                    <p>{director}</p>
                    <p>{release}</p>
                    <p>{desc}</p>
                    <div className = "rating">
                        <p>{rating}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}