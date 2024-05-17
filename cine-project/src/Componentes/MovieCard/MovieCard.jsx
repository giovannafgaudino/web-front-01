import {Link} from 'react-router-dom'

function MovieCard({filme}){
    return(
    <div className="movieCard">
        <p className="text-center my-3 text-2xl">{filme.title}</p>
        <img className='my-3' src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt=""/>  
        <p className=' text-sm text-justify'>{filme.overview}</p>
        <Link to={`${filme.id}`}>Saber Mais</Link>   
    </div>
)}

export default MovieCard
