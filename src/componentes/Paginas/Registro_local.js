import React, {useState} from 'react';

export const Local = () => {
	const [inputLocalName, changeInputLocal] = useState('');
    const [inputTypePerson, changeInputType] = useState('');
	const [inputId, changeInputId] = useState('');
    const [inputAmountLocals, changeInputAmount] = useState('');
    const [inputCorreo, changeInputCorreo] = useState('');
    const [inputContraseña, changeInputContraseña] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Registro del local Enviado :D');
        console.log((inputLocalName));
        console.log((inputTypePerson));
        console.log((inputId));
        console.log((inputAmountLocals));
        console.log((inputContraseña));
	}

	const handleInputLocal = (e) => {
		changeInputLocal(e.target.value);
	}

    const handleInputType = (e) => {
		changeInputType(e.target.value);
	}

    const handleInputId = (e) => {
		changeInputId(e.target.value);
	}

    const handleAmount = (e) => {
		changeInputAmount(e.target.value);
	}
	
	const handleInputCorreo = (e) => {
		changeInputCorreo(e.target.value);
	}

    const handleContraseña = (e) => {
		changeInputContraseña(e.target.value);
	}

	return (
		<>
            <h1 className="is">Registra tu local</h1>
			<form action="" onSubmit={handleSubmit} className="formulario3">
				<div>
					<label htmlFor="local">Nombre del Local</label>
					<input
						type="text"
						name="local"
						placeholder="Nombre del local"
						id="local"
						value={inputLocalName}
						onChange={handleInputLocal}
					/>
				</div>

                <div>
					<label htmlFor="persona">Tipo de persona</label>
					<input
						type="text"
						name="persona"
						placeholder="Escribir persona natural o juridica"
						id="persona"
						value={inputTypePerson}
						onChange={handleInputType}
					/>
				</div>

                <div>
					<label htmlFor="id">Identificacion del propietario</label>
					<input
						type="number"
						name="id"
						placeholder="Ingresar el numero de identificacion"
						id="id"
						value={inputId}
						onChange={handleInputId}
					/>
				</div>

                <div>
					<label htmlFor="amount">Ingresar la cantidad de locales activos</label>
					<input
						type="number"
						name="amount"
						placeholder="Numero de locales"
						id="amount"
						value={inputAmountLocals}
						onChange={handleAmount}
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
            

				<button type="submit">Registrar local</button>
			</form>
		</>
	);
}