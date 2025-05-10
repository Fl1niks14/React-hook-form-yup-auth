import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormInput from '../components/FormInput'
import { useNavigate } from 'react-router-dom'
import { type FormData } from '../types'

// Валидация с помощью Yup
const schema = yup
	.object({
		name: yup.string().optional(), // Поле name необязательное
		email: yup.string().email('Неверный email').required('Email обязателен'),
		password: yup
			.string()
			.min(6, 'Пароль должен быть не менее 6 символов')
			.required('Пароль обязателен')
	})
	.required()

const Login: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		resolver: yupResolver(schema)
	})

	const navigate = useNavigate()

	// Обработка отправки формы
	const onSubmit: SubmitHandler<FormData> = data => {
		console.log(data) // Проверим, что данные корректны
		localStorage.setItem('authToken', 'fake-token')
		alert('Вы успешно вошли!')
		navigate('/dashboard')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormInput
				label='Email'
				register={register}
				name='email'
				type='email'
				required={true}
				errors={errors}
			/>
			<FormInput
				label='Пароль'
				register={register}
				name='password'
				type='password'
				required={true}
				errors={errors}
			/>
			<button type='submit'>Войти</button>
		</form>
	)
}

export default Login
