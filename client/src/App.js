import { useState, useEffect} from 'react'
import MovieBlock from './component/movieBlock.jsx'
import './style/main.css'

function App() {
  const [movieList, setMovie] = useState([]);
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    Promise.all([
      fetch("http://localhost:9000/movies"),
      fetch("http://localhost:9000/comments")
    ])
    .then(([movieRes, commentRes]) => {
      return Promise.all([movieRes.json(), commentRes.json()]);
    })
    .then(([movieJSON, commentJSON]) => {
      setMovie(movieJSON.movies);
      setComments(commentJSON.comments);
      //setMovieandComment({"movieList": movieJSON.movies, "commentList": commentJSON.comments})
    });
    // fetch("http://localhost:9000/comments")
    // .then((movieRes) => {
    //   console.log(movieRes);
    //   return movieRes.json();
    // })
    // .then((movieJSON) => {
    //   console.log(movieJSON);
    //   setMovie(movieJSON);
    // });
  }, []);

  return (
    <>
      <h1>Movie Reviews</h1>
      <div className="container">
        {movieList.map((item) => {
            const commentItems = comments.filter((element) => item.id === element.id);
            return <MovieBlock movie={item.name} commentList={commentItems} />
        })}
      </div>
    </>
  );
}

export default App;
