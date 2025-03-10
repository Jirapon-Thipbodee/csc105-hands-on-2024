import { useState } from "react";

function App (){
	const [value,setValue] = useState(0);
	const [input , setInput] = useState("")
	
function handleAdd(){
	setValue((prev) => prev + Number(input));
}

function handleSubstract(){
	setValue((prev) => prev - Number(input));
}

function handleMultiply(){
	setValue((prev) => prev * Number(input));
}

function handleDivide(){
	setValue((prev) => prev / Number(input));
}

function handleResetInput(){
	setInput("");
}

function handleResetResult(){
	setValue(0);
}


	return (
		<div className="container">
			<div>
				<div className="calculator">
					<h1>Simple Calculator</h1>
			
					<div style={{ display: "flex", alignItems: "center", gap: "25px", marginBottom: "10px"}}>
  					<input type="number" placeholder="Enter a number" value={input} onChange={(e) => setInput(e.target.value)} />
  					<button className="resetButton" onClick={handleResetInput}>Reset Input</button>
					</div>
			
				
					<div className="space-x-4">
					<button onClick = {handleAdd}>Add</button>
					<button onClick = {handleSubstract}>Substract</button>
					<button onClick = {handleMultiply}>Multiply</button>
					<button onClick = {handleDivide}>Divide</button>
					</div>

					<p className="result-container">
						Result: {value} 
						<button className="resetButton" onClick = {handleResetResult}>Reset Result</button>
					</p>
				</div>
			</div>
		</div>
	);
}


export default App;