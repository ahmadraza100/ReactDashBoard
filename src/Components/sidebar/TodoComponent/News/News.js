import React from 'react';
import MediaCard from "./Newscard"
import {useState , useEffect} from "react"
import axios from 'axios';
import "../../../../App.css"
const News = () => {
    const [Newss, setNewss] = useState([]);
    // e5fcb8d0bc8f40a197b62f50f67c6f30
    
    useEffect(() => {
        let url =  "https://newsapi.org/v2/everything?q=Apple&from=2021-05-03&sortBy=popularity&apiKey=e5fcb8d0bc8f40a197b62f50f67c6f30"
        
        axios.get(url).then((res)=>{
            setNewss(res.data.articles);
        })
        
    },[]);
  
    console.log(Newss);
    return (
        <div className="news">
            <h1>This is news Page</h1>
            <p>World's Latest news are there !</p>
            <MediaCard Newss={Newss}></MediaCard>
            

        </div>
    );
}

export default News;
