import Articles from './components/Articles/Articles'
import About from './About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='http://nikitakocherinskiy.github.io/first-react-app'
					element={<Articles />}
				/>
				<Route
					path='http://nikitakocherinskiy.github.io/about'
					element={<About />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
