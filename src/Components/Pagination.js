import ReactPaginate from "react-paginate";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";

function Pagination({ currentPage, getProducts, total }) {


  const handlePageClick = async(data) => {
    currentPage = data.selected + 1;
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
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"flex flex-row-reverse mt-24 mb-36"}
        pageClassName={
          "border-2 border-[#ffbd07] p-3 mr-3 pt-2 rounded-full h-12 w-12 cursor-pointer text-center font-bold text-[#ffbd07] text-2xl hover:bg-[#ffbd07] hover:text-[#fff]"
        }
        pageLinkClassName={""}
        previousClassName={
          "border border-[#ffbd07]  hover:bg-[#ffbd07]  p-3 rounded-full h-12 w-12 mr-3 text-center cursor-pointer"
        }
        previousLinkClassName={" text-[#ffbd07] font-bold hover:text-[#fff] text-2xl"}
        nextClassName={
            "border border-[#ffbd07]  hover:bg-[#ffbd07] hover:text-[#fff] p-3 rounded-full h-12 w-12 mr-3 text-center cursor-pointer"
        }
        nextLinkClassName={" text-[#ffbd07] font-bold hover:text-[#fff] text-2xl"}
        activeClassName={"bg-[#ffbd07] text-[#fff] "}
        breakClassName={"border-2 border-[#ffbd07] p-3 mr-3 pt-1 rounded-full h-12 w-12 cursor-pointer text-center font-bold text-[#ffbd07] text-2xl hover:bg-[#ffbd07] hover:text-[#fff]"}
      />
    </div>
  );
}

export default Pagination;
