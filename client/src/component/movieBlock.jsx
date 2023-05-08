import '../style/movie.css';
import { useState, useEffect} from 'react'

export default function MovieBlock(props){
    const [comments, setComment] = useState([]);
    const movieName = props.movie;
    const commentList = props.commentList;
    
    return (
        <div className = "movieBlock">
            <div className = "blockFormat">
                <h2 className = "movieTitle">{movieName}</h2>
                <h5>Comments</h5>
                {commentList.map((item) => {
                    return <p>{item.comment}</p>
                })}
            </div>
        </div>
    );
}