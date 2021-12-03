import "./navBar.css";
import Logomarca from "../../img/Logomarca.jpg"

function NavBar(){
    return(
        <div className="NavBar">
            <img src={Logomarca} height="18"/>
        </div>
    )
}

export default NavBar;