import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import { fetchIssues } from 'reducer/issue'
import Pasy from './components/pagination'

const MainPage = () => {
	
	const dispatch = useDispatch()
	const { pageNum } = useParams()
	const { issues } = useSelector(state => state.issue)
	const [searchParams, setSearchParams] = useSearchParams()
	const [currentPage, setCurrentPage] = useState(parseInt(pageNum) || 1)
	const itemsPerPage = 10
	const totalItems = 200
	const totalPages = Math.ceil(totalItems / itemsPerPage)


	const emptyIssue = { title: '', body: '', id: Math.floor(Math.random()) }
	const firstIndex = (currentPage - 1) * itemsPerPage
	const lastIndex = currentPage * itemsPerPage
	const tempIssues = issues.slice(firstIndex, lastIndex)
	const currentIssues = tempIssues.concat(
		Array.from({ length: itemsPerPage - tempIssues.length }, () => emptyIssue),
	)

	useEffect(() => {
		const currentPage = parseInt(pageNum)
		dispatch(fetchIssues(currentPage))
	}, [dispatch, pageNum])


	return (
		<div>
			<h1>Angular CLI!</h1>
			<ul>
				{currentIssues.map(issue => (
					<li>
						<h2>{issue.title}</h2>
						<p>{issue.body}</p>
						<Link to={`/issues/${issue.id}`}>View Details</Link>
					</li>
				))}
			</ul>
			<Pasy 
				setCurrentPage= {setCurrentPage}
				currentPage ={currentPage}
				totalPages={totalPages}
			/>
		</div>
	)
}
export default MainPage
