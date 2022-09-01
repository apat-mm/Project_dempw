import React, {useState} from "react";

export const Search = () =>{
    const[isearch,setisearch] = useState('');

    const handleSub = (event) => {
        event.preventDefautl();
    }
    const handleOnChange = (event) => {
        setisearch(event.target.value)
    }
    console.log(isearch)

    return (
        <>
            <form action="" onSubmit={handleSub} className="formulario1">
				<div>
					<label htmlFor="nombre"></label>
					<input
						type="text"
						name="nombre"
						placeholder="¿Qué deseas buscar?"
						id="nombre"
						value={isearch}
						onChange={handleOnChange}
					/>
				</div>
            <button type="submit" onClick=""> Buscar </button>
            <h1 className="is1">Mostrar resultados para: {isearch}</h1>
            </form>
        </>
    )
}