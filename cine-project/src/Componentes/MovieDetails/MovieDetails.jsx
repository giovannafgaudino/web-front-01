import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function MovieDetails(){
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then((response) => response.json())
        .then((response) => {console.log(response);setMovie(response)})
        .catch(err => console.log(err))
    }, [])
    return(
        <>
        <h1>Página do filme</h1>
        <p>{movie.title}</p>
        </>
    )
}

export default MovieDetails