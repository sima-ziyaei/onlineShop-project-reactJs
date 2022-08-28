import { FaEdit } from "react-icons/fa";
import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useSelector } from "react-redux";

function EditCommodity({ id }) {
  const URL = "http://localhost:3001/";
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const category = useSelector((state) => state.product.categoryItem);
  const subCategory = useSelector((state) => state.product.subCategoryItem);
  const [selectedProduct, setSelectedProduct] = useState([
    {
      name: "",
      price: "",
      category: "",
      subCategory: "",
      information: "",
      photo: [],
      stock: "",
      off: "",
    },
  ]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const getSelectedProduct = () => {
    axios.get(`${URL}products?id=${id}`).then((res) => {
      const getData = res.data;
      setSelectedProduct(getData);
    });
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(selectedProduct);
    // setSelectedProduct((prev) => [{ ...prev, [name]: value }]);
  };

  return (
    <>
      <button
        onClick={() => {
          openModal();
          getSelectedProduct();
        }}
        className="text-[#ffbd07]"
      >
        <FaEdit />
      </button>
      <Modal isOpen={modalIsOpen}>
        {selectedProduct.map((el) => {
          return (
            <>
              <input
               
                name="name"
                type="text"
                value={el.name}
                onChange={handleChangeInput}
                className='border-2 border-y-fuchsia-900'
              />
              <input
                
                name="price"
                type="text"
                value={el.Price}
                onChange={handleChangeInput}
                className='border-2 border-y-fuchsia-900'
              />
              <select
            name="category"
            onChange={handleChangeInput}
            className="border border-violet-400"
          >
            {category.map((item) => {
              return <option value={item.name}  selected={item.id=== el.category ? true : false}> {item.name} </option>;
            })}
          </select>

           <select
            name="subCategory"
            onChange={handleChangeInput}
            
            className="border border-violet-400"
          >
            {category.map((item) => {
              if (el.category == item.name) {
                return(
                  subCategory.map((element) => {
                    if (item.id == element.category) {
                      return <option value={element.name} selected={element.name=== el.category ? true : false}> {element.name} </option>;
                    }
                  })  )
              }
            })}
          </select> 

              <CKEditor
                editor={ClassicEditor}
                data={el.information}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setSelectedProduct((prev) => [
                    { ...prev, information: data },
                  ]);
                }}
              />
            </>
          );
        })}
        <button onClick={() => console.log(selectedProduct)}> chap</button>
        <button onClick={() => setModalIsOpen(false)}> بستن </button>
      </Modal>
    </>
  );
}

export default EditCommodity;
