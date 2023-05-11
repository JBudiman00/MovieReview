import { useState, useEffect, useCallback} from 'react'
import MovieBlock from './component/movieBlock.jsx'
import './style/main.css'
import NavBar from './component/navBar.jsx';

const Main = () => {
    const [movieList, setMovie] = useState([]);
    const [offset, increment] = useState(1);

    //Change and limit number of page changes
    const changePage =(change) => {
        if(offset*10 < Object.keys(movieList).length && change === 1){
            increment(offset+change);
            return;
        } else if(offset >= 2 && change === -1) {
            increment(offset+change);
            return;
        }
        console.log("Cannot go above or below page limits");
    }

    const fetchRequest = useCallback(() => {
        fetch("http://localhost:9000/movies")
        .then((movieRes) => {
            return movieRes.json();
        })
        .then((movieJSON) => {
            setMovie(movieJSON);
        });
    }, []);
    
    useEffect(() => {
        fetchRequest();
    }, []);

    return (
        <>
        <NavBar />
        <h1 style={{color: "#F1F6F9", textAlign: "center"}}>Movie Reviews</h1>
        <div className="buttonDiv">
            <button className = "pageButton" onClick={e => changePage(-1)}>Previous Page</button>
            <button className = "pageButton" onClick={e => changePage(1)}>Next Page</button>
        </div>
        <div className="container">
            {movieList.map((item, i) => {
                if((offset-1)*10 <= i && offset*10 > i){
                    return <MovieBlock key={i} id={item.Movie_Id} name={item.Movie_Name} director={item.Director} rating={item.Rating} release={item.Release_Date} desc={item.Description}/>}
                }
            )}
        </div>
        </>
    );
}

export default Main;
