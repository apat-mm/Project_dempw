import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import reg from '../img/reg.png'
import FirebaseConfig from '../../firebase/firebaseConfig';

export const Formulario = () => {
	const [inputCheckBox, changeInputCheck] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Registro Enviado :D');
		const nombre = e.target.nombre.value;
		const apellido = e.target.apellido.value;
		const correo = e.target.correo.value;
		const password = e.target.password.value
		console.log(nombre, apellido, correo, password);
		FirebaseConfig.auth().createUserWithEmailAndPassword(correo, password).then((usuarioFirebase) => {
			console.log("Usuario creado:", usuarioFirebase);
		})
	}

	const handleCheckBox = (e) => {
		changeInputCheck(e.target.checked)
	}

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col cont cen">
						<img src={reg} />
					</div>
					<div className="col order-5 cont">
						<h1 className="is2">¡REGÍSTRATE!</h1>
						<div className="container">
							<button type="button" className="btn btn-primary bf"><i className="fa-brands fa-square-facebook"></i> Iniciar con Facebook</button>
						<button type="button" className="btn btn-danger bg"><i className="fa-brands fa-google"></i> Iniciar con Google</button>
						<button type="button" className="btn btn-dark ba"><i className="fa-brands fa-apple"></i>  Inicar con Apple</button>
						<br/>
						<p style={{display:'flex',justifyContent:'center', margin:'0px 110px 0px 20px'}}> ó </p>
						
						<form onSubmit={handleSubmit}>
							<div className="col-6">
							<div style={{margin:'10px 0px 0px 0px'}}>
								<label className="border1">Nombre</label>
								<input className="inpr border"
									type="text"
									name="nombre"
									placeholder=" - - - - - "
									id="nombre"
								/>
							</div>

							<div style={{margin:'10px 0px 0px 0px'}}>
								<label className="border1">Apellido</label>
								<input className="inpr border"
									type="text"
									name="apellido"
									placeholder=" - - - - -"
									id="apellido"
								/>
							</div>

							<div style={{margin:'10px 0px 0px 0px'}}>
								<label className="border1">Correo</label>
								<input className="inpr border"
									type="text"
									name="correo"
									placeholder=" - - - - -"
								/>
							</div>

							<div style={{margin:'10px 0px 0px 0px'}}> 
								<label className="border1">Contraseña</label>
								<input className="inpr border"
									type="password"
									placeholder=" * * * * *"
									id="password"
								/>
							</div>


							<div style={{margin:'10px 5px 0px 0px'}}>
								<label className="border1">Acepta los términos y condiciones</label>
								<br/>
								<input className="border"
									type="checkbox"
									value={inputCheckBox}
									onChange={handleCheckBox}
								/>
							</div>
							</div>

							<button type="button" className="btn btn-danger regi">Registrarme</button>
							<br/>
							<Link to='/inicio'>¿Ya tienes una cuenta? Inicia sesión</Link>
						</form>
					</div>
				</div>
			</div>
			</div>
		</>
	);
}