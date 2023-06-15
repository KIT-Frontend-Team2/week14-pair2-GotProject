import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchIssues } from 'reducer/issue'

const MainPage = () => {
	const dispatch = useDispatch()
	const { issues } = useSelector(state => state.issue)

	useEffect(() => {
		dispatch(fetchIssues())
	}, [dispatch])
	return (
		<div>
			<h1>Angular CLI!</h1>
			<ul>
				{issues.map(issue => (
					<li key={issue.id}>
						<h2>{issue.title}</h2>
						<p>{issue.body}</p>
						<Link to={`/issues/${issue.number}`}>View Details</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MainPage
