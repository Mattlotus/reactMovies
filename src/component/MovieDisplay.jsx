import React from 'react'


  function  MovieDisplay (props){

  const loaded = () => {
    return (
      <div>
        <h1>{props.movie.Title}</h1>
        <h2>{props.movie.Genre}</h2>
        <img src={props.movie.Poster} alt={props.movie.Title} />
        <h2>{props.movie.Year}</h2>
      </div>
    );
  };

  
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  return props? loaded() : loading();
};


export default MovieDisplay