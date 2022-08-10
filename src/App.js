import Articles from './components/Articles/Articles'
import About from './About'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route
					path='http://nikitakocherinskiy.github.io/#/first-react-app'
					element={<Articles />}
				/>
				<Route
					path='http://nikitakocherinskiy.github.io/#/about'
					element={<About />}
				/>
			</Routes>
		</HashRouter>
	)
}

export default App
