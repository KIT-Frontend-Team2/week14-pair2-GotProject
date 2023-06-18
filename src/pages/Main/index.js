import CheckBox from 'Filter/checkbox'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchIssues } from 'reducer/issue'
import styled from 'styled-components'
import Pasy from './components/pagination'

const MainPage = () => {
	const dispatch = useDispatch()
	const { pageNum } = useParams()
	const { issues } = useSelector(state => state.issue)
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
		<S.Wrapper>
			<S.Top>
				<Title>Angular CLI!</Title>

				<S.Right>
					<S.CheckBox2
						handleFilters={filters => handleFilters(filters, 'continents')}
					/>

					<ul>
						{currentIssues.map(issue => (
							<S.ListOne>
								<StyledLink to={`/issues/${issue.number}`}>
									<p>#{issue.number}</p>
									<h2>{issue.title}</h2>
									<p>comments({issue.comments})</p>
									<p>
										{issue.body.length > 100
											? `${issue.body.slice(0, 100)}...`
											: issue.body}
									</p>
									<p>{issue.user?.login}</p>
									<p>{issue.create_at}</p>
								</StyledLink>
							</S.ListOne>
						))}
					</ul>
				</S.Right>
			</S.Top>
			<Pasy
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</S.Wrapper>
	)
}
export default MainPage

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000;
`

const Wrapper = styled.div`
	width: 100%;
	background-color: #ebf1f4;
`
const Top = styled.div`
	display: flex;

	//for Mobiles
	@media only screen and (max-width: 600px) {
		width: 100%;
		flex-direction: column;
	}
	//for Tablets and Medium Screens
	@media only screen and (min-width: 600px) {
		width: 100%;
		flex-direction: column;
	}
	//for laptops and desktops
	@media only screen and (min-width: 992px) {
		width: 100%;
		flex-direction: row;
	}
`

const Title = styled.h1`
	width: 20%;
	font-size: 36px;
	border-bottom: 1px solid black;
	padding: 40px 3%;
	font-weight: 600;

	//for Mobiles
	@media only screen and (max-width: 600px) {
		width: 100%;
		text-align: center;
	}
	//for Tablets and Medium Screens
	@media only screen and (min-width: 600px) {
		width: 100%;
		text-align: center;
	}
	//for laptops and desktops
	@media only screen and (min-width: 992px) {
		width: 20%;
	}
`
const Right = styled.div`
	width: 80%;
	padding: 40px 3%;
	border-left: 1px solid black;
	border-bottom: 1px solid black;

	//for Mobiles
	@media only screen and (max-width: 600px) {
		width: 100%;
		text-align: center;
	}
	//for Tablets and Medium Screens
	@media only screen and (min-width: 600px) {
		width: 100%;
		text-align: center;
	}
	//for laptops and desktops
	@media only screen and (min-width: 992px) {
		width: 80%;
		text-align: left;
	}
`

const CheckBox2 = styled(CheckBox)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`
const ListOne = styled.li`
	border: 1px solid #333;
	padding: 1rem;
	border-radius: 15px;
	margin: 20px 0;
	box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.3);

	//for Mobiles
	@media only screen and (max-width: 600px) {
		width: 100%;
		margin: 20px auto;
		text-align: center;
	}
	//for Tablets and Medium Screens
	@media only screen and (min-width: 600px) {
		width: 100%;
		margin: 20px auto;
		text-align: center;
	}
	//for laptops and desktops
	@media only screen and (min-width: 992px) {
		width: 100%;
		margin: 20px auto;
		text-align: left;
	}
`

const S = {
	Wrapper,
	Top,
	Title,
	Right,
	ListOne,
	CheckBox2,
}
