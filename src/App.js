import Articles from './components/Articles/Articles'
import About from './About'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route
					path='https://nikitakocherinskiy.github.io/first-react-app/#/first-react-app'
					element={<Articles />}
				/>
				<Route
					path='https://nikitakocherinskiy.github.io/first-react-app/#/first-react-app/about'
					element={<About />}
				/>
			</Routes>
		</HashRouter>
	)
}

export default App
