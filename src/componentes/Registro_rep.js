import React, {useState} from 'react';

export const Repartidor = () => {
	const [inputName, changeInputName] = useState('');
    const [inputLastName, changeInputLastName] = useState('');
    const [inputCorreo, changeInputCorreo] = useState('');
    const [inputContraseña, changeInputContraseña] = useState('');
    const [inputCity, changeInputCity] = useState('');
	const [inputNumber, changeInputNumber] = useState('');
    const [inputCheckBox, changeInputCheck] = useState('')


	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Registro del local Enviado :D');
        console.log((inputName));
        console.log((inputLastName));
        console.log((inputContraseña));
        console.log((inputCity));
        console.log((inputNumber));
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputName = (e) => {
		changeInputName(e.target.value);
	}

    const handleInputLast = (e) => {
		changeInputLastName(e.target.value);
	}

    const handleInputCorreo = (e) => {
		changeInputCorreo(e.target.value);
	}

    const handleContraseña = (e) => {
		changeInputContraseña(e.target.value);
	}

    const handleInputCity = (e) => {
		changeInputCity(e.target.value);
	}

    const handleInputNumber = (e) => {
		changeInputNumber(e.target.value);
	}

    const handleCheckBox = (e) => {
        changeInputCheck(e.target.checked)
    }
	
	

	return (
		<>
            <h1 className="is">Registrate como repartidor</h1>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="repartidor">Nombre</label>
					<input
						type="text"
						name="repartidor"
						placeholder="Ingresa tu nombre"
						id="repartidor"
						value={inputName}
						onChange={handleInputName}
					/>
				</div>

                <div>
					<label htmlFor="apellido">Apellido</label>
					<input
						type="text"
						name="apellido"
						placeholder="Ingresa tu apellido"
						id="apellido"
						value={inputLastName}
						onChange={handleInputLast}
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
					<label htmlFor="contraseña">Contraseña</label>
					<input
						type="text"
						name="contraseña"
						placeholder="Ingresa una contraseña"
						id="contraseña"
						value={inputContraseña}
						onChange={handleContraseña}
					/>
				</div>

                <div>
					<label htmlFor="city">Ciudad</label>
					<input
						type="text"
						name="city"
						placeholder="Ingresa la ciudad en la que te encuentras"
						id="city"
						value={inputCity}
						onChange={handleInputCity}
					/>
				</div>

                <div>
					<label htmlFor="number">Numero telefonico</label>
					<input
						type="number"
						name="number"
						placeholder="Ingresa tu numero telefonico"
						id="Number"
						value={inputNumber}
						onChange={handleInputNumber}
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
            
				<button type="submit">Registrarme</button>
                <h1 className="is">¿Cómo empezar a repartir?</h1>
                <br/>
                <h3>
                    01 Descarga la aplicación, ingresa tus datos básicos y carga tus documentos
                </h3>
                <br/>
                <h3>
                    02 Indica el día y la hora que te quieres conectar
                </h3>
                <br/>
                <h3>
                    03 Conéctate para recibir tus pedidos y realizar tus primeras entregas
                </h3>
			</form>
		</>
	);
}