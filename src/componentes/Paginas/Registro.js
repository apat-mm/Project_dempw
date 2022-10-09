// import React from 'react';
// import { Link } from 'react-router-dom'
// //import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
// import login from '../assets/img/login.jpg'
// import rappi from '../assets/img/rappi.png'
// import Footer from '../Navegacion/Footer';

// export const Registro = () => {

// 	// const signInWithGithub = () => {
// 	// 	signInWithPopup(auth, new GithubAuthProvider())
// 	// 	.then((res) => console.log(res))
// 	// 	.catch((err) => SpeechSynthesisErrorEvent(err.code))
// 	// 	.finally(() => setLoading(false));
// 	// }

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		console.log('Formulario Enviado!');
// 		const correo = e.target.nombre.value;
// 		const password = e.target.correo.value
// 		console.log(correo, password);
// 		FirebaseConfig.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase) => {
// 			console.log("Sesión iniciada con:", usuarioFirebase.user);
// 		})

// 	}

// 	return (
// 		<>
// 			<div className="container-fluid" style={{background:'#ffe2d8'}}>
// 				<div className="row">
// 					<div className="col">
// 						<img className="img2" src={rappi} />
// 						<h1 className="is">Iniciar Sesion</h1>
// 						<form action="" onSubmit={handleSubmit} className="container">

// 							<div className="row" id="pd">
// 								<div className="col-6 cen">
// 									<div>
// 										<label className="border1">Correo electronico</label>
// 										<input className="inp border"
// 											type="text"
// 											name="nombre"
// 											placeholder=" - - - - -"
// 										/>
// 									</div>

// 									<div style={{margin:'10px 0px 0px 0px'}}>
// 										<label className="border1">Contraseña</label>
// 										<input className="inp border"
// 											type="password"
// 											name="correo"
// 											placeholder=" * * * * *"
// 										/>
// 									</div>

// 									<button type="button" className="btn btn-secondary ini">Iniciar</button>
// 								</div>
								// <div className="col-6 cen">
									
								// 	<button type="button" className="btn btn-primary bfr"><i className="fa-brands fa-square-facebook"></i> Iniciar con Facebook</button>
								// 	<button type="button" className="btn btn-danger bgr"><i className="fa-brands fa-google"></i> Iniciar con Google</button>
								// 	<button type="button" className="btn btn-dark bar"><i className="fa-brands fa-apple"></i>  Inicar con Apple</button>
								// </div>
// 							</div>
// 							<p className="parr">¿Aún no tienes una cuenta? Registrate <Link to='/registro'> AQUÍ</Link></p>
// 							<button type="button" className="btn btn-danger reg">Regresar</button>
// 						</form>
// 					</div>
// 					<div className="col order-5 cont">
// 						<img className="img" src={login} />
// 					</div>
// 				</div>
// 			</div>
// 			<Footer/>
// 		</>
// 	);
//}


//////////////////

import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { Link } from 'react-router-dom'
import login from '../assets/img/login.jpg'
import rappi from '../assets/img/rappi.png'
import Footer from '../Navegacion/Footer';
import Auth from "./auth";
const Registro = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  // return (
  //   <div className="form">
  //     <h2> Login </h2>
  //     <form onSubmit={onSubmit}>
  //       <input placeholder="Correo" type="email" ref={emailRef} />
  //       <input placeholder="Contraseña" type="password" ref={psdRef} />
  //       <button type="submit">Iniciar Sesión</button>
  //       <p onClick={forgotPasswordHandler}>¿Olvidó su contraseña?</p>
  //     </form>
  //   </div>
  // );

  return (
		<>
			<div className="container-fluid" style={{background:'#ffe2d8'}}>
				<div className="row">
					<div className="col">
						<img className="img2" src={rappi} />
						<h1 className="is">Iniciar Sesion</h1>
						<form action="" onSubmit={onSubmit} className="container">

							<div className="row" id="pd">
								<div className="col-6 cen" style={{display:'grid', justifyContent:'center'}}>
									<div>
										<label className="border1">Correo electronico</label>
										<input className="inp border"
											type="text"
											name="nombre"
											placeholder=" - - - - -"
                      ref={emailRef}
										/>
									</div>

			
									<div style={{margin:'10px 0px 0px 0px'}}>
										<label className="border1">Contraseña</label>
										<input className="inp border"
											type="password"
											name="correo"
											placeholder=" * * * * *"
                      ref={psdRef}
										/>
									</div>
									<br/><br/>
									<div style={{display:'flex', alignItems:'flex-end', justifyContent:'center'}}>
									<button type="button" className="btn btn-secondary" style={{width:'100px',marginRight:'5px'}}>Iniciar</button>
									<button type="button" className="btn btn-danger"style={{width:'100px'}}>Regresar</button>
									</div>
								</div>
								<p style={{marginTop:'30px'}}>ó</p>
							</div>
							
						</form>
					</div>
					<div className="col order-5 cont">
						<img className="img" src={login} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Registro;
