import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { fetchIssues } from 'reducer/issue'

const MainPage = () => {
  const dispatch = useDispatch();
  const { pageNum } = useParams();
  const { issues } = useSelector(state => state.issue)

  const [currentPage, setCurrentPage] = useState(parseInt(pageNum) || 1);
  const [pageGroup, setPageGroup] = useState(1);

  const itemsPerPage = 10;
  const pageGroupSize = 10;
  const totalItems = 200; 
  const totalPages = Math.ceil(totalItems/itemsPerPage)

  const startPage = (pageGroup - 1) * pageGroupSize + 1;  
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages); 


  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }


  const handlePageClick = (index) => {
    setCurrentPage(index);
    console.log(index)
  };

  const handlePrevClick = () => {
  if (currentPage > 1) { 
    setCurrentPage(currentPage - 1); 
    if (currentPage - 1 < startPage) { 
      setPageGroup(pageGroup - 1); 
    }
  }
  }
  
  const handleNextClick = () => {
    if (currentPage < totalPages) { 
      setCurrentPage(currentPage + 1); 
      if (currentPage + 1 > endPage) { 
        setPageGroup(pageGroup + 1); 
      }
    }
  }

  const emptyIssue = { title: "", body: "", id:  Math.floor(Math.random())  };
  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = currentPage * itemsPerPage;
  const tempIssues = issues.slice(firstIndex, lastIndex);
  const currentIssues = tempIssues.concat(
  Array.from({ length: itemsPerPage - tempIssues.length }, () => emptyIssue));



  useEffect(() => {
    const currentPage = parseInt(pageNum);
    dispatch(fetchIssues(currentPage));
  }, [dispatch, pageNum]);


  return (
    <div>
      <h1>Angular CLI!</h1>
      <ul>
        {currentIssues.map((issue) => (
          <li>
            <h2>{issue.title}</h2>
            <p>{issue.body}</p>
            <Link to={`/issues/${issue.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
      <ul>
        <button onClick={() =>setCurrentPage(1)}>맨처음</button>
        <button onClick={() =>handlePrevClick()}>이전</button>
        {pageNumbers.map((index) =><button key={index} onClick={() => handlePageClick(index)} 
        style={{ fontWeight: currentPage === index ? "bold" : "normal" }}>{index}</button>)}
        <button onClick={() =>handleNextClick()}>다음</button>
        <button onClick={() => setCurrentPage(200)}>맨끝</button>
      </ul>
    </div>
  );
};
export default MainPage;
