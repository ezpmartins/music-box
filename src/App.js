import api from "./api";
import { useState } from "react";
import "./globals.css"
function App() {
    const [music_box, setMusicas] = useState([]);
    function listar() {
        api.get()
            .then((respostaObtida) => {
                console.log(respostaObtida);
                console.log(respostaObtida.status);
                console.log(respostaObtida.data);
                setMusicas(respostaObtida.data)

            })
            .catch((erroOcorrido) => {
                console.log(erroOcorrido);
            })
    }
    return (
        <>
            <h1>Titulo</h1>
            <button onClick={listar}>Listar</button>
        </>
    );
}
export default App;