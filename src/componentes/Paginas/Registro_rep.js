import React, { useState } from 'react';
import repar from '../img/repar.png'
import rappi from '../img/rappi.png'

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
			<div className="container">
				<div className="row row-cols-2">
					<div className="col">
						<img className="imgre" src={repar} />
					</div>
					<div className="col" style={{ padding: '30px 40px 0px 100px' }}>
						<br />
						<br />
						<img className="img2" style={{ padding: '20px,100px,0px,50px' }} src={rappi} />
						<br/>
						<h1 style={{ color: '#FF5C00', fontWeight: 'bold', fontSize: '50px', textAlign: 'center' }}>¡Regístrate ahora!</h1>
						<br/>
						<p style={{ color: '#494949', fontWeight: 'bold', fontSize: '45px', textAlign: 'center', lineHeight: '43px' }}>Y descubre todos los beneficios que tenemos para ti</p>
					</div>
				</div>
			</div>

			<div className="container" style={{ background: '#FFF4F4', padding: '20px ' }}>
				<div className="row">
					<div className="col cont cen">
						<form onSubmit={handleSubmit}>
							<div style={{ margin: '10px 0px 0px 0px' }}>
								<label className="border1">Nombre</label>
								<br />
								<input className="inpr border"
									type="text"
									name="repartidor"
									placeholder=" - - - - -"
									id="repartidor"
									value={inputName}
									onChange={handleInputName}
								/>
							</div>
							<div style={{ margin: '10px 0px 0px 0px' }}>
								<label className="border1">Correo</label>
								<br />
								<input className="inpr border"
									type="text"
									name="correo"
									placeholder=" - - - - -"
									id="correo"
									value={inputCorreo}
									onChange={handleInputCorreo}
								/>
							</div>
							<div style={{ margin: '10px 0px 0px 0px' }}>
								<label className="border1">Contraseña</label>
								<br />
								<input className="inpr border"
									type="text"
									name="contraseña"
									placeholder=" * * * * *"
									id="contraseña"
									value={inputContraseña}
									onChange={handleContraseña}
								/>
							</div>
						</form>
					</div>
					<div className="col cont cen" style={{ padding: '0px 20px 0px 0px' }}>
						<div style={{ margin: '10px 0px 0px 0px' }}>
							<label className="border1">Apellido</label>

							<input className="inpr border"
								type="text"
								name="apellido"
								placeholder=" - - - - -"
								id="apellido"
								value={inputLastName}
								onChange={handleInputLast}
							/>
						</div>
						<div style={{ margin: '10px 0px 0px 0px' }}>
							<label className="border1">Ciudad</label>

							<input className="inpr border"
								type="text"
								name="city"
								placeholder=" - - - - -"
								id="city"
								value={inputCity}
								onChange={handleInputCity}
							/>
						</div>
						<div style={{ margin: '10px 0px 0px 0px' }}>
							<label className="border1">Numero telefonico</label>
							<br />
							<input className="inpr border"
								type="number"
								name="number"
								placeholder=" 313...."
								id="Number"
								value={inputNumber}
								onChange={handleInputNumber}
							/>
						</div>
					</div>
				</div>
				<br/>
				<p className='parr' style={{color:'#3B4754'}}>Al registrarte estás aceptando nuestros términos y condiciones</p>
				<button type="button" className="btn btn-outline-light reg">Registrarme</button>
			</div>
			<br/>
			<div className="container" style={{ background: '#FFF4F4', padding: '20px ' }}>
				<br/>
			<h1 style={{ color: '#FF5C00', fontWeight: 'bold', fontSize: '40px', textAlign: 'center' }}>¿CÓMO EMPEZAR A REPARTIR?</h1>
			<br />
			<h3>
				<h3 style={{color: '#FF5C00', fontWeight: 'bold'}}>01</h3> Descarga la aplicación, ingresa tus datos básicos y carga tus documentos
			</h3>
			<br />
			<h3>
				02 Indica el día y la hora que te quieres conectar
			</h3>
			<br />
			<h3>
				03 Conéctate para recibir tus pedidos y realizar tus primeras entregas
			</h3>
			</div>	
		</>
	);
}