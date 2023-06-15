import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from 'routes/routing'
import { worker } from '__Mock__/handler'
import { Provider } from 'react-redux'
import { store } from 'store/store'

function App() {
	if (process.env.NODE_ENV === 'development') {
		worker.start()
	}
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	)
}

export default App
