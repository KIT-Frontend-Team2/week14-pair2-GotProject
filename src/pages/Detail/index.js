import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchIssueDetails } from 'reducer/issue'

const DetailPage = () => {
	const { number } = useParams()
	const dispatch = useDispatch()
	const { details } = useSelector(state => state.issue)

	useEffect(() => {
		dispatch(fetchIssueDetails(number))
	}, [dispatch])

	return (
		<div>
			<h1>Issue Details</h1>

			<p>#{details.id}</p>
			<p>{details.title}</p>
			<p>{details.state}</p>
			<p>{details.comments}</p>
			<p>{details.user?.login}</p>
			<p>{details.body}</p>
		</div>
	)
}
export default DetailPage
