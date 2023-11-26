import Header from "../header/Header";
import "./app.css"
import Main from "../main/Main";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
function App () {
    return(
        <div className="wrapper">
            <Header/>
            <Menu/>
            <Main/>
            <Footer/>
        </div>
    )
}
export default App
