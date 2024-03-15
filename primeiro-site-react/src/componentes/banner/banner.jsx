import "./Banner.css"
function Banner (props){
    return(
        <div>
        <h1 className="titulo-principal">{props.textoBanner}</h1>
        <p> Texto Banner </p>
        </div>

    )
}

export default Banner