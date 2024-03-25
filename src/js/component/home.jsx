import React, { useContext } from "react";

import AddItem from "./AddItem";
import MyContext from "../../GlobalContext";
// import TaskContext from "../TaskContext";

//create your first component
const Home = () => {


	const context = useContext(MyContext)

	// const {tasks, taskActions} = useContext(TaskContext)

	// const deleteTask = (index) => {
	// 	taskActions({type: 'remove', id: index})
	// }

	return (
		<div className="container text-center">
			<h2>Todo List</h2>
			<h3>{context.store.userProfile.name}</h3>
			<AddItem />
			<ul>
				{context.store.todos.length !== 0 && context.store.todos.map((task, index) => {
					return <li key={task}>{task} <i className="far fa-trash-alt" onClick={() => context.actions.removeTask(index)}></i></li>
				})}
			</ul>
			{/* <ul>
				{tasks.length !== 0 && tasks.map((task, index) => {
					return <li key={task}>{task} <i className="far fa-trash-alt" onClick={() => deleteTask(index)}></i></li>
				})}
			</ul> */}
		</div>
	);
};

export default Home;
