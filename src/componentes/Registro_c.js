import React, {useState} from 'react';

export const Formulario = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
    const [inputLastName, changeInputLastName] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');
    const [inputNumber, changeInputNumber] = useState('');
    const [inputCheckBox, changeInputCheck] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Registro Enviado :D');
        console.log((inputNombre));
        console.log((inputLastName));
        console.log((inputCorreo));
        console.log((inputNumber))
	}

	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}

    const handleLastName = (e) => {
		changeInputLastName(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

    const handleNumber = (e) => {
		changeInputNumber(e.target.value);
	}

    const handleCheckBox = (e) => {
        changeInputCheck(e.target.checked)
    }

	return (
		<>
            <h1 className="is">Registrate</h1>
			<form action="" onSubmit={handleSubmit} className="formulario2">
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

                <div>
					<label htmlFor="apellido">Apellido</label>
					<input
						type="text"
						name="apellido"
						placeholder="Apellido"
						id="apellido"
						value={inputLastName}
						onChange={handleLastName}
					/>
				</div>

				<div>
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>

                <div>
					<label htmlFor="numero">Numero telefonico</label>
					<input
						type="number"
						name="numero"
						placeholder="Telefono"
						id="numero"
						value={inputNumber}
						onChange={handleNumber}
					/>
				</div>
                
                
                <div>
					<label htmlFor="checkBox">Aceptas los terminos y condiciones</label>
					<input
						type="checkbox"
						name="terminos"
						id="terminos"
						value={inputCheckBox}
						onChange={handleCheckBox}
					/>
				</div>

				<button type="submit">Registrarse</button>
			</form>
		</>
	);
}