import {useState} from "react";
import {AddCategory,GifGrid} from "./components";

export const GifExpertApp = () => {//COMPONENTE REACT
    const [categories, setCategories] = useState(["One punch"])//USE STATE QUE GUARDA EN UN ARREGLO

    const onAddCategory = (newCategory) => {//RECIBE UNA CATEGORIA "NARUTO"
        if (categories.includes(newCategory)) return; // SI YA ESTA PRESENTE NO LA AGREGA
        setCategories([newCategory,...categories]); // LO GUARDA EN CATEGORIAS EN OTRO ARREGLO
    }

    return (
    <>
            <h1>GIFAPP</h1>

            <AddCategory onNewCategory={onAddCategory}/> {/* RECIBE CATEGORIA Y MANDA A LA FUNCION */}

            {
                categories.map((category) =>( // RECORRE LAS CATEGORIAS
                    <GifGrid key={category} category={category}/> // INSERTA PROP CON UNA CATEGORIA
                ))
            }
        </>
    )
}