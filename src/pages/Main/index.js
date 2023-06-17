import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckBox from 'Filter/checkbox'
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
	const { filters, setFilters } = useState({
		continents: [],
		price: [],
	})


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

	const showFilteredResult = filters => {
		//이슈(list)를 갖고와야하는데.....어케갖고오냐 짝짝짝~ㅋㅋㅋ
		//issueSlice를 갖고오면될거같긴한데 두번째 문제....filters랑 newFilters가 api걸러내게 할수 있게해줘야하는데
		//문제가 어디다가 그걸 써서 해야하나...어떻게걸러내게 해야하나...실화냐...?

		const variables = {
			filters: filters,
		}
		issueSlice
		setSkip
	}

	const handleFilters = (filters, category) => {
		console.log(filters)
		const newFilters = { ...filters }

		newFilters[category] = filters

		if (category === 'price') {
		}
		showFilteredResult(newFilters)
		setFilters(newFilters)
	}


	return (
		<div>
			<h1>Angular CLI!</h1>
			<div>
				<CheckBox
					handleFilters={filters => handleFilters(filters, 'continents')}
				/>
			</div>
			<ul>
				{currentIssues.map(issue => (
					<li>
						<h2>{issue.title}</h2>
						<p>{issue.body}</p>
						<Link to={`/issues/${issue.number}`}>View Details</Link>
					</li>
				))}
			</ul>

			<Pasy
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</div>
	)
}
export default MainPage
