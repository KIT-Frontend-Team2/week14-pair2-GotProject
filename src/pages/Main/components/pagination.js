import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";


const Pasy = ({setCurrentPage,currentPage,totalPages}) => {
	const [searchParams, setSearchParams] = useSearchParams();
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
		const pageNumFromURL = parseInt(searchParams.get("pageNum"));
		if (!isNaN(pageNumFromURL)) {
			setCurrentPage(pageNumFromURL);
		} else {
			setCurrentPage(1);
		}
	}, []);
	
//searchParams 변경 시 페이지 업데이트를 위한 useEffect
  useEffect(() => {
    const pageNumFromURL = parseInt(searchParams.get("pageNum"));
    if (!isNaN(pageNumFromURL)) {
      setCurrentPage(pageNumFromURL);
    }else {
			setCurrentPage(1);
		}
  }, [searchParams]);



	//번호 클릭 했을때 리스트 가져오기 
  const handlePageClick = index => {
		setCurrentPage(index)
		console.log(index)
		setSearchParams({ pageNum: index });
		console.log(searchParams.toString());
	}

	// 맨처음이동
	const handleFirstPageClick = () => {
		setCurrentPage(1);
		setPageGroup(1);
		setSearchParams({ pageNum: 1 })
	};

	// 맨끝이동
	const handleLastPageClick = () => {
		setCurrentPage(totalPages);
		setPageGroup(Math.ceil(totalPages / pageGroupSize));
		setSearchParams({ pageNum: totalPages });
	};

	//이전 클릭
	const handlePrevClick = () => {
		if (currentPage > 1) {
			const prevPage = currentPage - 1;
			setCurrentPage(prevPage);
			if ((prevPage - 1) % pageGroupSize === 0) {
				setPageGroup(pageGroup - 1);
			}
			setSearchParams({ pageNum: prevPage });
			console.log(pageNumFromURL)
		}
	};

	console.log(currentPage)
	
// 다음 클릭 
	const handleNextClick = () => {
		if (currentPage < totalPages) {
			const nextPage = currentPage + 1;
			setCurrentPage(nextPage);
			if (nextPage > endPage) {
				setPageGroup(pageGroup + 1);
			}
			setSearchParams({ pageNum: nextPage });
		}
	}

  return(
    <ul>
				<button onClick={() => handleFirstPageClick()}>맨처음</button>
				<button onClick={() => handlePrevClick()}>이전</button>
				{pageNumbers.map(index => (
					<button
						key={index}
						onClick={() => handlePageClick(index)}
						style={{ fontWeight: currentPage === index ? 'bold' : 'normal' }}
					>
						{index}
					</button>
				))}
				<button onClick={() => handleNextClick()}>다음</button>
				<button onClick={() => handleLastPageClick()}>맨끝</button>
			</ul>
  )

}

export default Pasy