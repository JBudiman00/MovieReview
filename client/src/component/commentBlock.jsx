import '../style/moviepage.css';
import { useState, useEffect} from 'react'

export default function CommentBlock(props){
    const desc = props.desc;
    return (
        <div className= "commentBlock">
            <p>{desc}</p>
        </div>
    );
}