import Articles from './components/Articles/Articles'
import About from './About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Articles />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
