import React, { useState } from "react";
import './App.css';

function ButtonBar(Buttons) {
	// const clickFunction = (id) => {
	// 	console.log("Hi")
	// 	return (
	// 		console.log("E: ", id)
	// 	)
	// }
	const clickFunction = (e) => {
		return (
			console.log("E: ", e.target.id)
		)
	}

	return (
    <div className="ButtonBar">
			{Buttons.Buttons.map(b => (
				<button 
					key={b.id}
					className="Button"
					id={b.id}
					onClick={clickFunction}
				>
					{b.name}
				</button>
			))}
    </div>
  );
}

export default ButtonBar;
