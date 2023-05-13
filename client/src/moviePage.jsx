import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style/moviepage.css';
import CommentBlock from './component/commentBlock';
import NavBar from './component/navBar.jsx';

const MoviePage = () => {
    const [comments, setComments] = useState([]);
    const [movie, setMovie] = useState([]);
    const [desc, setDesc] = useState("");
    const [update, setUpdate] = useState("");

    const {id} = useParams();
    
    useEffect(() => {
        Promise.all([
            fetch("https://moviereviewapi-31eq.onrender.com/comments/" + id),
            fetch("https://moviereviewapi-31eq.onrender.com/movies/" + id)
        ])
        .then(([commentRes, movieRes]) => {
            return Promise.all([commentRes.json(), movieRes.json()]);
        })
        .then(([commentJSON, movieJSON]) => {
            setComments(commentJSON);
            setMovie(movieJSON);
        });
    }, [update]);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://moviereviewapi-31eq.onrender.com/addcomment", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              desc: desc,
              movie_id: id,
              prev_comment_id: null
            }),
          });
          if (res.status === 200) {
            setDesc("");
            setUpdate(desc)
            console.log("1 Row updated");
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <>
            <NavBar />
            {movie.map((item) => {
                return( 
                    <div className="movie">
                        <h1>{item.Movie_Name}</h1>
                        <p>{item.Director}</p>
                        <p>{item.Rating}</p>
                        <p>{item.Release_Date}</p>
                        <p>{item.Description}</p>
                    </div>
                );
            })}
            <div className = "comments">
                {comments.map((item) => {
                    return( 
                    <CommentBlock desc={item.Description}/>
                    );
                })}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="desc" onChange={(e) => setDesc(e.target.value)}/>
                    <button type="submit">Add Comment</button>
                </form>
            </div>
        </>
        );
}

export default MoviePage;