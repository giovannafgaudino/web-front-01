function Habilidades (props){
    return (
        <>
        <div className="skills">
            <h2>Habilidades</h2>
            <div className="skill-card">
              <h3>{props.habilidade}</h3>
              <p>Nivel: {props.nivel}</p>
            </div>
            <div className="skill-card">
              <h3></h3>
              <p>Nivel: </p>
            </div>
            <div class="skill-card">
                <h3></h3>
                <p>Nivel: </p>
            </div>
        </div>
        </>
    )
}

export default Habilidades