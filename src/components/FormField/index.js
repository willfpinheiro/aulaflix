import React from "react";

function FormField({ label, type, name, values, placeholder, onChange }) {
	return (
		<div>
			<label>
				{label}
				<input
					type={type}
					name={name}
					value={values}
					placeholder={placeholder}
					onChange={onChange}
				></input>
			</label>
		</div>
	);
}

export default FormField;
