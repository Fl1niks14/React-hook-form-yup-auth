import { Routes, Route } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route
				path='/dashboard'
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
		</Routes>
	)
}

export default App
