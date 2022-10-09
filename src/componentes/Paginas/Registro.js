import React from 'react';
import { Link } from 'react-router-dom'
import FirebaseConfig from '../../firebase/firebaseConfig';
//import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import login from '../assets/img/login.jpg'
import rappi from '../assets/img/rappi.png'
import Footer from '../Navegacion/Footer';

export const Registro = () => {

	// const signInWithGithub = () => {
	// 	signInWithPopup(auth, new GithubAuthProvider())
	// 	.then((res) => console.log(res))
	// 	.catch((err) => SpeechSynthesisErrorEvent(err.code))
	// 	.finally(() => setLoading(false));
	// }

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Formulario Enviado!');
		const correo = e.target.nombre.value;
		const password = e.target.correo.value
		console.log(correo, password);
		FirebaseConfig.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase) => {
			console.log("Sesión iniciada con:", usuarioFirebase.user);
		})

	}

	return (
		<>
			<div className="container-fluid" style={{background:'#ffe2d8'}}>
				<div className="row">
					<div className="col">
						<img className="img2" src={rappi} />
						<h1 className="is">Iniciar Sesion</h1>
						<form action="" onSubmit={handleSubmit} className="container">

							<div className="row" id="pd">
								<div className="col-6 cen">
									<div>
										<label className="border1">Correo electronico</label>
										<input className="inp border"
											type="text"
											name="nombre"
											placeholder=" - - - - -"
										/>
									</div>

									<div style={{margin:'10px 0px 0px 0px'}}>
										<label className="border1">Contraseña</label>
										<input className="inp border"
											type="password"
											name="correo"
											placeholder=" * * * * *"
										/>
									</div>

									<button type="button" className="btn btn-secondary ini">Iniciar</button>
								</div>
								<div className="col-6 cen">
									
									<button type="button" className="btn btn-primary bfr"><i className="fa-brands fa-square-facebook"></i> Iniciar con Facebook</button>
									<button type="button" className="btn btn-danger bgr"><i className="fa-brands fa-google"></i> Iniciar con Google</button>
									<button type="button" className="btn btn-dark bar"><i className="fa-brands fa-apple"></i>  Inicar con Apple</button>
								</div>
							</div>
							<p className="parr">¿Aún no tienes una cuenta? Registrate <Link to='/registro'> AQUÍ</Link></p>
							<button type="button" className="btn btn-danger reg">Regresar</button>
						</form>
					</div>
					<div className="col order-5 cont">
						<img className="img" src={login} />
					</div>
				</div>
			</div>
			<Footer/>
		</>
	);
}
