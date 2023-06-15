import Layout from 'components/Layout'
import DetailPage from 'pages/Detail'
import MainPage from 'pages/Main'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/issues/:number',
				element: <DetailPage />,
			},
		],
	},
])

export default router
