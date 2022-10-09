import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import FirebaseConfig from '../../firebase/firebaseConfig';

export const Formulario = () => {
	const [inputCheckBox,changeInputCheck] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Registro Enviado :D');
        const nombre = e.target.nombre.value;
		const apellido = e.target.apellido.value;
		const correo = e.target.correo.value;
		const password = e.target.password.value
		console.log(nombre,apellido,correo,password);
		FirebaseConfig.auth().createUserWithEmailAndPassword(correo, password).then((usuarioFirebase) =>{
			console.log("Usuario creado:", usuarioFirebase);
		})
	}

    const handleCheckBox = (e) => {
        changeInputCheck(e.target.checked)
    }

	return (
		<>
            <h1 className="is">Registrate</h1>
			<form onSubmit={handleSubmit} className="formulario2">
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
					/>
				</div>

                <div>
					<label htmlFor="apellido">Apellido</label>
					<input
						type="text"
						name="apellido"
						placeholder="Apellido"
						id="apellido"
					/>
				</div>

				<div>
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
					/>
				</div>

                <div>
					<label htmlFor="Contraseña">Contraseña</label>
					<input
						type="password"
						name="password"
						placeholder="Contraseña"
						id="password"
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
				<Link to='/inicio'>¿Ya tienes una cuenta? Inicia sesión</Link>
			</form>
		</>
	);
}