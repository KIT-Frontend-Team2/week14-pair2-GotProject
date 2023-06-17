import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from 'routes/routing'
// import { worker } from '__Mock__/handler'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import GlobalStyles from 'style/global'
import { ThemeProvider } from 'styled-components'
import theme from 'style/theme'

function App() {
	// if (process.env.NODE_ENV === 'development') {
	// 	worker.start()
	// }
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<GlobalStyles/>
				<RouterProvider router={router} />
			</Provider>
		</ThemeProvider>
	)
}

export default App
