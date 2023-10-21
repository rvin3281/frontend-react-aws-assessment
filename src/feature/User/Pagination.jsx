import { useLocation, Link, useNavigate } from "react-router-dom";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;

  .btn {
    padding: 0.5rem 1rem;
    background-color: grey;
    border-radius: 2px;
  }

  .btn-container {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .active {
    background-color: yellow;
  }
`;

const Pagination = () => {
  const { currentPage, numOfpages } = useSelector(
    (state) => state?.dashboard?.users
  );
  console.log(currentPage, numOfpages);

  const pages = Array.from({ length: numOfpages }, (_, index) => {
    return index + 1;
  }); // _ => access the undefined

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handlePagination = (pageNumber) => {
    navigate(`${pathname}?page=${pageNumber}`);
    console.log(pageNumber);
  };

  return (
    <Wrapper>
      {/* Previous Btn */}
      <div>
        <button
          className="btn btn-prev"
          onClick={() => {
            let prevPage = currentPage - 1;
            if (prevPage < 1) prevPage = numOfpages;
            handlePagination(prevPage);
          }}
        >
          Prev
        </button>
      </div>
      {/* Btn Container */}
      <div className="btn-container">
        {/* Iterate Button based on the pages */}
        {pages.map((pageNumber) => {
          return (
            <button
              onClick={() => handlePagination(pageNumber)}
              key={pageNumber}
              className={`btn btn-pagination ${
                pageNumber === currentPage && "active"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      {/* Next Btn */}
      <div>
        <button
          className="btn btn-next"
          onClick={() => {
            let nextPage = currentPage + 1;
            console.log(currentPage);
            if (nextPage > numOfpages) nextPage = 1;
            handlePagination(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </Wrapper>
  );
};
export default Pagination;
