import React, { useId } from 'react';

const Input = React.forwardRef(function Input(
	{ label, type = "text", className, ...props },
	ref
) {
	const Id = React.useId();
	return (
		<div className="w-full">
			{label && (
				<label htmlFor={Id} className="inline-block mb-1 pl-1">
					{label}
				</label>
			)}
			<input
				id={Id}
				className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
				type={type}
				{...props}
				ref={ref}
			/>
		</div>
	);
});

export default Input;