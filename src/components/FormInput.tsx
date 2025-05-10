import React from 'react'
import { type UseFormRegister } from 'react-hook-form'
import { type FieldError } from 'react-hook-form'
import { type FormData } from '../types'

interface FormInputProps {
	label: string
	register: UseFormRegister<FormData>
	name: keyof FormData
	type: string
	required?: boolean
	errors: {
		[key in keyof FormData]?: FieldError
	}
	pattern?: RegExp
}

const FormInput: React.FC<FormInputProps> = ({
	label,
	register,
	name,
	type,
	required = false,
	errors,
	pattern
}) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				{...register(name, { required, pattern })}
				type={type}
				placeholder={label}
			/>
			{errors[name] && <p style={{ color: 'red' }}>{errors[name]?.message}</p>}
		</div>
	)
}

export default FormInput
