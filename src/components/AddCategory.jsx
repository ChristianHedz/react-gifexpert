import {useState} from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState(""); //RECIBE VALORES DEL INOUT

    const onInputChange = ({target}) => { //MODIFICA EL TARGET DEL INPUT
        setInputValue(target.value)
    }

    const onSubmit = (e) => {  //AL HACER ENTER VERIFICA SI HAY UN VALOR
      e.preventDefault();
      if(inputValue.trim() < 1 )return;
        onNewCategory(inputValue.trim()) //MANDA EL VALOR DEL INPUT SIN ESPACIOS
        setInputValue("")
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text" placeholder={"Buscar GIFS"}
                value={inputValue}
                onChange={onInputChange} //AL ESCRIBIR EN EL INOUT MANDA  A LA FUNCION QUE MODIFICA EL INPUT
            />
        </form>
    )
}