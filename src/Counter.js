import React from 'react';
import {useState} from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleAddClick = () => {
		setCount(count + 1);
	}

	const handleResetClick = () => {
		setCount(0);
	}

	return (
		<>
			<span className="badge badge-primary m-2">{count === 0 ? 'Zero' : count}</span>
			<button className="btn btn-secondary btn sm" onClick={handleAddClick}>Add value</button>
			<button className="btn btn-danger btn-sm" onClick={handleResetClick}>Reset</button>
		</>
	)
};

export default Counter;
