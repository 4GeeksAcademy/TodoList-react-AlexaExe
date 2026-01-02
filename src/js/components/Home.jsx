import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])

	const addToDo = () => {
		setTodos([...todos, inputValue])
		setInputValue("")
	}

	const deleteTask = (index) => {
		const newArray = todos.filter((todo, i) => index != i)
		setTodos(newArray)
	}


	return (

		<>
			<div className="container text-center bg-success text-white bg-opacity-75" style={{ padding: "0px", height: "500px" }}>
				<div>
					<h1>"<i class="fa-solid fa-list"></i>"Planeado</h1>
					<input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") { //uso en onKey con enter, para que presionando enter
													// se añada mi addToDo,
								addToDo(); //volvemos a llamar a la función
							}
						}}
					/>

					<button onClick={addToDo}>enviar</button>
				</div>
				<div className="container text-center">
					<ul>
						{todos.map((todo, index) =>
							<ul key={index}>
								{todo}
								<button id="X" onClick={() => deleteTask(index)}>x</button>
							</ul>
						)}
					</ul>
				</div>
			</div>
		</>
	)

}

export default Home;

//type="button" class="btn-close" aria-label="Close" para quitar las To do list...