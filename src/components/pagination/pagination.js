import { useDispatch, useSelector } from "react-redux";
import "./pagination.css";
import { scrollToTop, createArrayInRange } from "../../helpers/utils";
import Types from "../../duck/types";

const Pagination = () => {
  const reducer = useSelector((state) => state.reducer);
  const { pagination, displayList } = reducer;
  const { page, perPage } = pagination;
  const dispatch = useDispatch();
  const totalPages = Math.ceil(displayList.length / perPage);
  const pages = createArrayInRange(1, totalPages);

  const updatePage = (pageNumber) => {
    dispatch({
      type: Types.UPDATE_PAGE,
      data: pageNumber,
    });
    scrollToTop();
  };

  const getButtonClass = () => {
    let classList = "next-btn";
    if (page == totalPages) {
      classList += " disabled-item";
    }

    return classList;
  };

  return (
    <div className="pagination-container">
      <div className="page-info">
        Page {page} of {totalPages}
      </div>
      <div className="pagination-contents">
        {pages.map((currentPage) => {
          return (
            <div
              onClick={() => updatePage(currentPage)}
              className={currentPage == page ? "selected-page" : "current-page"}
            >
              {currentPage}
            </div>
          );
        })}
      </div>
      <div onClick={() => updatePage(page + 1)} className={getButtonClass()}>
        Next {"\u003E"}
      </div>
      <div></div>
    </div>
  );
};

export default Pagination;
