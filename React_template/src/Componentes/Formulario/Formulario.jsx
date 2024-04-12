function Formulario(){
    return (
    <>
    <div className="contact">
        <h2>Entre em Contato</h2>
        <form>
            <input type="text" placeholder="Nome"/>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="Mensagem"></textarea>
            <button type="submit">Enviar</button>
        </form>
    </div>
    </>
    )
}

export default Formulario