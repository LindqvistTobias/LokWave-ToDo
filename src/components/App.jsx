import './App.css';
import { useState } from 'react';
import Input from './Input'
import List from './List'

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		if(todo !== ''){
			setTodos([...todos, todo]);
			setTodo('');
		}		
	}

	const complete = (text) => {
		const uncompletedTodos = todos.filter((todo) => todo !== text);
		setTodos(uncompletedTodos);
	}

	return (
		<div className="App">
			<img className='logo' src="/logo-230116-110523.png" alt="Techover" />
			<Input setTodo={setTodo} todo={todo} addTodo={addTodo}/>
			<List todos={todos} complete={complete}/>			
		</div>
	);
}

export default App;
