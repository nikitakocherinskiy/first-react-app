import Articles from './components/Articles/Articles'
import About from './About'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route exact path='/' element={<Articles />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</HashRouter>
	)
}

export default App
