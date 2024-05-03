import NavBar from "../NavBar/NavBar"
import "./Header.css"
function Header() {
    return(
        <>
            <header className="bg-black">
                <link rel="icon" href="./Netflix_2015_logo.svg" className="w-8"/>
                <span>Logo</span>
                <h1>Bem-vindo ao Netflix</h1>
                <NavBar/>
            </header>
        </>
    )
}
export default Header