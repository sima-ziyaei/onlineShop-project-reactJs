import ReactPaginate from "react-paginate";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";


function Pagination({ currentPage, getProducts, total, setSearch }) {
  

  const handlePageClick = async(data) => {
    currentPage = data.selected + 1;
    // setSearch({currentPage, value})
    await getProducts(currentPage)
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={<IoArrowUndoSharp />}
        nextLabel={<IoArrowRedoSharp />}
        breakLabel={"..."}
        // pageCount={6}
        pageCount={Math.ceil(total/5)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"flex flex-row-reverse mt-24 mb-36"}
        pageClassName={
          "border-2 border-[#013662] p-3 mr-3 pt-2 rounded-full h-12 w-12 cursor-pointer text-center font-bold text-[#013662] text-2xl hover:bg-[#013662] hover:text-[#fff]"
        }
        pageLinkClassName={""}
        previousClassName={
          "border border-[#013662]  hover:bg-[#013662]  p-3 rounded-full h-12 w-12 mr-3 text-center cursor-pointer"
        }
        previousLinkClassName={" text-[#013662] font-bold hover:text-[#fff] text-2xl"}
        nextClassName={
            "border border-[#013662]  hover:bg-[#013662] hover:text-[#fff] p-3 rounded-full h-12 w-12 mr-3 text-center cursor-pointer"
        }
        nextLinkClassName={" text-[#013662] font-bold hover:text-[#fff] text-2xl"}
        activeClassName={"bg-[#013662] text-[#fff]"}
        breakClassName={"border-2 border-[#013662] p-3 mr-3 pt-1 rounded-full h-12 w-12 cursor-pointer text-center font-bold text-[#013662] text-2xl hover:bg-[#013662] hover:text-[#fff]"}
      />
    </div>
  );
}

export default Pagination;
