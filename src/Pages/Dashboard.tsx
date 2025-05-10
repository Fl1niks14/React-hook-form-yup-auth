import React from 'react'

const Dashboard: React.FC = () => {
	const handleLogout = () => {
		localStorage.removeItem('authToken')
		alert('Вы вышли из системы')
		window.location.reload()
	}

	return (
		<div>
			<h1>Личный кабинет</h1>
			<button onClick={handleLogout}>Выйти</button>
		</div>
	)
}

export default Dashboard
