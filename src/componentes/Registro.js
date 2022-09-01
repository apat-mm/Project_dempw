import React, {useState} from 'react';
import Img2 from './img/Img2.png';


export const Registro = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Formulario Enviado!');
		console.log(inputNombre);
		console.log(inputCorreo);
	}

	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

	return (
		<>
			<img src={Img2} alt="" className="im1"/>
			<h1 className="is">Iniciar Sesion</h1>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Correo electronico</label>
					<input
						type="text"
						name="nombre"
						placeholder="Correo electrónico"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>

				<div>
					<label htmlFor="correo">Contraseña</label>
					<input
						type="text"
						name="correo"
						placeholder="Contraseña"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>

				<button type="submit">Iniciar</button>
				<p className="parr">¿Aún no tienes una cuenta? Registrate AQUÍ</p>
				<button type="boton">Regresar</button>
			</form>
		</>
	);
}
 
