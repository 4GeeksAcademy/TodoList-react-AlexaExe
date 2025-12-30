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
		const newArray = todos.filter((todo, i)=> index != i)
		setTodos(newArray)
	}


	return (

		<>
			<div>
				<input 
					type="text"
					value={inputValue}
					onChange={(e)=> setInputValue(e.target.value)}
				/>
				<button onClick={addToDo}>enviar</button>
			</div>
			<div>
				<ul>
					{todos.map((todo, index)=> 
					<li key={index}>
						{todo}
					<button onClick={()=>deleteTask(index)}>borrar</button>
					</li>
					)}
				</ul>
			</div>
		</>
	)

}

export default Home;

//type="button" class="btn-close" aria-label="Close" para quitar las To do list...