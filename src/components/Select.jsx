import React, { useId } from "react";

const Select = React.forwardRef(function Select({ options, label, className = "", ...props }, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && <label htmlFor={id}>{label}</label>}
            <select
                id={id}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});



export default Select;