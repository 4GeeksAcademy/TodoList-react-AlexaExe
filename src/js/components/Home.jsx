import React, { useState } from "react";
import Perfil from "./Perfil";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
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
		
			<div className="container-fluid text-center bg-success-subtle text-success-emphasis" style={{ marginTop:"0px", paddingTop: "10px"}}>
			
				{/* TO DO */}
				<div className="container text-center bg-light bg-opacity-50 text-success-emphasis border border-success-subtle shadow-lg" style={{ padding: "0px", height: "600px", width: "600px", position:"relative", top:"-100px" }}>
					<h1><i className="fa-solid fa-list"></i> <strong>To do</strong></h1>
					<input
						type="text"
						className="inputs"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") { //uso en onKey con enter, para que presionando enter
								// se añada mi addToDo,
								addToDo(); //volvemos a llamar a la función
							}
						}}
					/>

					<button onClick={addToDo}>añadir</button>
					<div className="container text-center">
						<ul>
							{todos.map((todo, index) =>
								<ul className="todo-item" key={index}>
									{todo}
									<button className="todo-x" onClick={() => deleteTask(index)}>x</button>
								</ul>
							)}

						</ul>
					</div>

				</div>

			</div>
		</>
	)

}

export default Home;
