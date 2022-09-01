import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import MultiImageInput from "react-multiple-image-input";

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
  const [images, setImages] = useState({});
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100"
  };

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
    console.log(value);
    // setSelectedProduct((prev) => [{ ...prev, [name]: value }]);
  };

  const persianNumber = (x) => {
    return x.toLocaleString("fa-IR");
  };

  const handleSubmit=()=>{
    axios .put(`${URL}products/${id}`, selectedProduct)
    .then((res)=> console.log(res))
  }

  return (
    <>
      <button
        onClick={() => {
          openModal();
          getSelectedProduct();
        }}
        className="text-[#013662]"
      >
        <FaEdit />
      </button>
      <Modal
        isOpen={modalIsOpen}
        className="w-[50%] absolute overflow-y-auto max-h-screen bg-white border p-4 top-[0%] left-[25%]"
      >
        {selectedProduct.map((el) => {
          return (
            <div className="flex flex-col">
              <MultiImageInput
                images={images}
                setImages={setImages}
                allowCrop={false}
                theme={"light"}
                cropConfig={{ crop, ruleOfThirds: true }}
              />
              نام کالا:
              <input
                name="name"
                type="text"
                value={el.name}
                onChange={handleChangeInput}
                className="border-2 my-5 w-[80%] rounded-md border-[#013662]"
              />
              قیمت:
              <input
                name="price"
                type="text"
                value={el.Price}
                onChange={handleChangeInput}
                className="border-2 my-5 w-[80%] rounded-md border-[#013662]"
              />
              تعداد:
              <input
                name="stock"
                type="text"
                value={el.stock}
                onChange={handleChangeInput}
                className="border-2 my-5 w-[80%] rounded-md border-[#013662]"
              />
              تخفیف:
              <input
                name="off"
                type="text"
                value={el.off}
                onChange={handleChangeInput}
                className="border-2 my-5 w-[80%] rounded-md border-[#013662]"
              />
              دسته بندی:
              <select
                name="category"
                onChange={handleChangeInput}
                className="border-2 my-5 w-[80%] rounded-md border-[#013662]"
              >
                {category.map((item) => {
                  return (
                    <option
                      value={item.name}
                      // selected={item.id == el.category ? true : false}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <select
                name="subCategory"
                onChange={handleChangeInput}
                className="border-2 my-5 w-[80%] rounded-md border-[#013662]"
              >
                {category.map((item) => {
                  if (el.category == item.name) {
                    return subCategory.map((element) => {
                      if (item.id == element.category) {
                        return (
                          <option
                            value={element.name}
                            selected={
                              element.name === el.category ? true : false
                            }
                          >
                            {" "}
                            {element.name}{" "}
                          </option>
                        );
                      }
                    });
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
            </div>
          );
        })}
        <button onClick={handleSubmit}> chap</button>
        <button onClick={() => setModalIsOpen(false)}> بستن </button>
      </Modal>
    </>
  );
}

export default EditCommodity;
