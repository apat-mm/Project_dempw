import React from 'react';
import { Link } from 'react-router-dom'
import FirebaseConfig from '../../firebase/firebaseConfig';
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

export const Registro = () => {

	const signInWithGithub = () => {
		signInWithPopup(auth, new GithubAuthProvider())
		.then((res) => console.log(res))
		.catch((err) => SpeechSynthesisErrorEvent(err.code))
		.finally(() => setLoading(false));
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Formulario Enviado!');
		const correo = e.target.nombre.value;
		const password = e.target.correo.value
		console.log(correo,password);
		FirebaseConfig.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase)=>{
			console.log("Sesión iniciada con:", usuarioFirebase.user);
		})
		
	}

	return (
		<>
			<h1 className="is">Iniciar Sesion</h1>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Correo electronico</label>
					<input
						type="text"
						name="nombre"
						placeholder="Correo electrónico"
						id="nombre"
					/>
				</div>

				<div>
					<label htmlFor="correo">Contraseña</label>
					<input
						type="password"
						name="correo"
						placeholder="Contraseña"
						id="correo"
					/>
				</div>

				<button type="submit">Iniciar</button>
				<p className="parr">¿Aún no tienes una cuenta? Registrate <Link to='/registro'> AQUÍ</Link></p>
				<button type="boton">Regresar</button>
			</form>
		</>
	);
}
 
