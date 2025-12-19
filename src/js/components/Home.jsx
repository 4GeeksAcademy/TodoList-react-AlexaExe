import React, { useState } from "react";
import Perfil from './Perfil';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [alumno, setAlumno] = useState({
		name: "",
		email: "",

	});

	//const [email, setEmail] = useState("");


	const [alumnos, setAlumnos] = useState([]);
	console.log(alumno);



	const handleChange = (e) => {
		setAlumno({
			...alumno,
			[e.target.name]: e.target.value
		})
	}

	const handleKeyUp = (e) => {
		if (alumno.name.trim() == "" || alumno.email.trim() == "") {
			alert("Debes rellenar todos los campos, no seas flojo")
			return
		}

		//spread operator
		setAlumnos([...alumnos, alumno])
		setAlumno({
			name: "",
			email: "",
		})
	}
}


const handleClick = () => {
	if (alumno.name.trim() == "" || alumno.email.trim() == "") {
		alert("Debes rellenar todos los campos, no seas flojo")
		return
	}

	//spread operator
	setAlumnos([...alumnos, alumno])
	setAlumno({
		name: "",
		email: "",
	})
}


return (
	<>
		<div className="text-center">
			<input name="name"
				value={alumno.name}
				type="text"
				onChange={handleChange} />


			<input name="email"
				value={alumno.email}
				type="text"
				onChange={handleChange}
				onKeyUp={handleKeyUp}
			/>



			<button className="btn success" onClick={handleClick}>Agregar</button>
			<div className="container">
				{
					alumnos.map((alumno, index) => {
						return (
							<div key={index}>
								<p> Name: {alumno.name}</p>
								<p> Email: {alumno.email}</p>
							</div>
						)
					})
				}

			</div>
		</div>

	</>
);

}

export default Home;

//type="button" class="btn-close" aria-label="Close" para quitar las To do list...