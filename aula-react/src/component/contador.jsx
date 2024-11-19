import React, {useState} from "react";

    function Contador (props) {
        const [Contador, setContador] = useState(0);
        return(
            <div>
                <p> 
                    Voce clicou {Contador} vezes </p>
                <p> Meu nome é {props.nome} {props.sobrenome} e idade {props.idade}</p>
                <button onClick={() =>{
                    setContador(Contador + 1)
                }}>
                    Clique aqui
                </button>
            </div>
        )
    }
    export default Contador;