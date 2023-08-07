
import './App.css';
import {useState,useEffect} from "react";
import MovieDisplay from "./component/MovieDisplay";
import Form from "./component/Form";

function App() {
  const apiKey = "14f43282"
  
  const [movie,setMovie] = useState('')

 
  const getMovie = async(searchTerm)=>{
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${searchTerm}`)

    
  

    const data = await response.json()
    setMovie(data)
  }
  useEffect(() => {
    getMovie('Troy');
  }, [])

  //Function that uses async-await to fetch movie data
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}




export default App;
