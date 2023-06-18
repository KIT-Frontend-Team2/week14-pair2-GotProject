import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { flexAlignCenter, flexCenter } from 'style/common'
import styled from 'styled-components'

const Pasy = ({ setCurrentPage, currentPage, totalPages }) => {
	const [searchParams, setSearchParams] = useSearchParams()
	// 두개의 그룹 렌더링
	const [pageGroup, setPageGroup] = useState(1)
	const pageGroupSize = 10

	// 페이지 그룹을 두개로 분리
	const startPage = (pageGroup - 1) * pageGroupSize + 1
	const endPage = Math.min(startPage + pageGroupSize - 1, totalPages)

	// 페이지 넘버 넣는 배열
	const pageNumbers = []
	for (let i = startPage; i <= endPage; i++) {
		pageNumbers.push(i)
	}

	//페이지 초기화
	useEffect(() => {
		const pageNumFromURL = parseInt(searchParams.get('pageNum'))
		if (!isNaN(pageNumFromURL)) {
			setCurrentPage(pageNumFromURL)
		} else {
			setCurrentPage(1)
		}
	}, [])

	//searchParams 변경 시 페이지 업데이트를 위한 useEffect
	useEffect(() => {
		const pageNumFromURL = parseInt(searchParams.get('pageNum'))
		if (!isNaN(pageNumFromURL)) {
			setCurrentPage(pageNumFromURL)
		} else {
			setCurrentPage(1)
		}
	}, [searchParams])

	//번호 클릭 했을때 리스트 가져오기
	const handlePageClick = index => {
		setCurrentPage(index)
		console.log(index)
		setSearchParams({ pageNum: index })
		console.log(searchParams.toString())
	}

	// 맨처음이동
	const handleFirstPageClick = () => {
		setCurrentPage(1)
		setPageGroup(1)
		setSearchParams({ pageNum: 1 })
	}

	// 맨끝이동
	const handleLastPageClick = () => {
		setCurrentPage(totalPages)
		setPageGroup(Math.ceil(totalPages / pageGroupSize))
		setSearchParams({ pageNum: totalPages })
	}

	//이전 클릭
	const handlePrevClick = () => {
		if (currentPage > 1) {
			const prevPage = currentPage - 1
			setCurrentPage(prevPage)
			if ((prevPage - 1) % pageGroupSize === 0) {
				if (pageGroup > 1) {
					// 페이지 그룹이 1보다 작아지지 않도록 조건 추가
					setPageGroup(pageGroup - 1)
				}
			} else if (currentPage === startPage) {
				setPageGroup(pageGroup - 1)
			}
			setSearchParams({ pageNum: prevPage })
		}
	}

	console.log(currentPage)

	// 다음 클릭
	const handleNextClick = () => {
		if (currentPage < totalPages) {
			const nextPage = currentPage + 1
			setCurrentPage(nextPage)
			if (nextPage > endPage) {
				setPageGroup(pageGroup + 1)
			}
			setSearchParams({ pageNum: nextPage })
		}
	}

	return (
		<S.Pagination>
			<button onClick={() => handleFirstPageClick()}>&#8249;&#8249;</button>
			<button onClick={() => handlePrevClick()}>&#8249;</button>
			{pageNumbers.map(index => (
				<S.PageNumber
					key={index}
					onClick={() => handlePageClick(index)}
					isSelected={currentPage === index}
				>
					{index}
				</S.PageNumber>
			))}
			<button onClick={() => handleNextClick()}>&#62;</button>
			<button onClick={() => handleLastPageClick()}>&#62;&#62;</button>
		</S.Pagination>
	)
}

export default Pasy

const Pagination = styled.div`
	${flexAlignCenter}
	width: 50%;
	padding: 2rem 0 2rem 0;
	margin: 0 auto;
	text-align: center;
	justify-content: center;
	& button {
		border-radius: 0.5rem;
		border: 1px solid gray;
		font-size: 14px;
		width: 36px;
		height: 36px;
		margin: 0 3px;
		:hover {
			cursor: pointer;
			background-color: ${({ theme }) => theme.PALETTE.black};
			color: ${({ theme }) => theme.PALETTE.white};
			transition: 0.5s;
		}

		//for Mobiles
		@media only screen and (max-width: 600px) {
			width: 20px;
			height: 20px;
			font-size: 10px;
		}
		//for Tablets and Medium Screens
		@media only screen and (min-width: 600px) {
			width: 20px;
			height: 20px;
		}
		//for laptops and desktops
		@media only screen and (min-width: 992px) {
			width: 36px;
			height: 36px;
		}
	}
	//for Mobiles
	@media only screen and (max-width: 600px) {
		width: 80%;
	}
	//for Tablets and Medium Screens
	@media only screen and (min-width: 600px) {
		width: 80%;
	}
	//for laptops and desktops
	@media only screen and (min-width: 992px) {
		width: 50%;
	}

	&:first-child {
		font-size: 60px;
	}
`
const PageNumber = styled.li`
	${flexCenter}
	width: 36px;
	height: 36px;
	list-style: none;
	border-radius: 0.5rem;
	font-size: 14px;
	margin: 0 3px;
	font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
	background-color: ${({ isSelected, theme }) =>
		isSelected ? theme.PALETTE.black : theme.PALETTE.gray};
	color: ${({ isSelected, theme }) =>
		isSelected ? theme.PALETTE.white : theme.PALETTE.black};
	cursor: pointer;

	:hover {
		background-color: ${({ theme }) => theme.PALETTE.black};
		color: ${({ theme }) => theme.PALETTE.white};
	}

	//for Mobiles
	@media only screen and (max-width: 600px) {
		width: 20px;
		height: 20px;
		font-size: 10px;
	}
	//for Tablets and Medium Screens
	@media only screen and (min-width: 600px) {
		width: 20px;
		height: 20px;
	}
	//for laptops and desktops
	@media only screen and (min-width: 992px) {
		width: 36px;
		height: 36px;
	}
`

const S = {
	Pagination,
	PageNumber,
}
