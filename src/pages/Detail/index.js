import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchIssueDetails } from 'reducer/issue'
import { flexCenter } from 'style/common'
import styled from 'styled-components'

const DetailPage = () => {
	const { number } = useParams()
	const dispatch = useDispatch()
	const { details } = useSelector(state => state.issue)

	useEffect(() => {
		dispatch(fetchIssueDetails(number))
	}, [dispatch])

	return (
		<S.DetailPageWrapper>
			<S.DetailContainer>
				<S.DetailNumber>#{details.number}</S.DetailNumber>
				<S.DetailTitle>{details.title}</S.DetailTitle>
				<S.DetailRow>
					<S.DetailAvatar src={details.user?.avatar_url} alt="User Avatar" />
					<S.DetailUser>{details.user?.login}</S.DetailUser>
				</S.DetailRow>
				<DetailBody>{details.body}</DetailBody>
			</S.DetailContainer>
		</S.DetailPageWrapper>
	)
}
export default DetailPage

const DetailPageWrapper = styled.div`
	padding: 20px;
	background-color: ${props => props.theme.PALETTE.secondary};
	${flexCenter}
	margin-top: 0;
	min-height: 100vh;
	// 모바일
	@media only screen and (max-width: 600px) {
		min-height: calc(100vh - 60px);
	}

	// 중간 사이즈
	@media only screen and (min-width: 600px) {
		min-height: calc(100vh - 60px);
	}

	// 컴퓨터
	@media only screen and (min-width: 992px) {
		min-height: calc(100vh - 120px);
	}
`

const DetailContainer = styled.div`
	width: 80%;
`

const DetailNumber = styled.div`
	font-weight: ${props => props.theme.FONT_WEIGHT.bold};
	font-size: ${props => props.theme.FONT_SIZE.large};
	${flexCenter}
	margin-bottom: 20px
`

const DetailTitle = styled.div`
	${flexCenter}
	font-size: ${props => props.theme.FONT_SIZE.large};
	font-weight: ${props => props.theme.FONT_WEIGHT.bold};
	color: #939393;
	border-bottom: 6px solid rgba(0, 0, 0, 0.1);
	padding-bottom: 24px;
`
const DetailRow = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 48px;
`

const DetailAvatar = styled.img`
	width: 48px;
	border-radius: 50%;
`

const DetailUser = styled.div`
	font-size: ${props => props.theme.FONT_SIZE.medium};
	font-weight: ${props => props.theme.FONT_WEIGHT.bold};
	margin-left: 12px;
`

const DetailBody = styled.p`
	font-weight: ${props => props.theme.FONT_WEIGHT.bold};
	margin-top: 20px;
	white-space: pre-line;
`
const S = {
	DetailPageWrapper,
	DetailContainer,
	DetailNumber,
	DetailTitle,
	DetailRow,
	DetailAvatar,
	DetailUser,
	DetailBody,
}
