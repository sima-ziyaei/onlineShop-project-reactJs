import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import  ClassicEditor  from "@ckeditor/ckeditor5-build-classic";
import  {CKEditor}  from "@ckeditor/ckeditor5-react";

function AddCommodity() {
  const URL = "http://localhost:3001/";
  const category = useSelector((state) => state.product.categoryItem);
  const subCategory = useSelector((state) => state.product.subCategoryItem);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    subCategory: "",
    information: "",
    photo: [],
    stock: "",
    off: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handlePhoto = (e) => {
    console.log(e.target.files[0]);
    setFormData((prev) => ({ ...prev, photo: e.target.files[0].name }));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    await axios.post(`http://localhost:3001/products`, formData)
        .then(response =>  console.log(response.data.id) )
        .catch((err) => alert(err.message));
    // setModalIsOpen(false);
  };

  const handleFormData = (e) => {
    console.log(formData.category);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <button
        onClick={() => openModal()}
        className="border-2 font-bold p-3 rounded-2xl border-[#ffbd07] text-[#ffbd07] hover:bg-[#ffbd07] hover:text-white "
      >
        افزودن کالا
      </button>
      <Modal isOpen={modalIsOpen}>
        <form className="flex flex-col">
          <input type="file" multiple onChange={handlePhoto} />
          name
          <input
            type="text"
            name="name"
            onChange={handleFormData}
            className="border border-violet-400"
          />
          price
          <input
            type="text"
            name="price"
            onChange={handleFormData}
            className="border border-violet-400"
          />
          stock
          <input
            type="text"
            name="stock"
            onChange={handleFormData}
            className="border border-violet-400"
          />
          off
          <input
            type="text"
            name="off"
            onChange={handleFormData}
            className="border border-violet-400"
          />
          category
          <select
            name="category"
            onChange={handleFormData}
            className="border border-violet-400"
          >
            {category.map((el) => {
              return <option value={el.name}> {el.name} </option>;
            })}
          </select>
          <select
            name="subCategory"
            onChange={handleFormData}
            style={
              formData.category ? { display: "block" } : { display: "none" }
            }
            className="border border-violet-400"
          >
            {category.map((item) => {
              if (formData.category == item.name) {
                return(
                  subCategory.map((el) => {
                    if (item.id == el.category) {
                      return <option value={el.name}> {el.name} </option>;
                    }
                  })  )
              }
            })}
          </select>
          توضیحات
            <CKEditor
            editor={ClassicEditor}
            data={formData.information}
            onChange={(event, editor)=>{
              const data= editor.getData()
              setFormData((prev) => ({ ...prev, information: data }));
            }}
            /> 
          {/* <textarea className="w-[100%] h-24 border border-violet-600"/> */}
          <button onClick={handleSubmit}>submit</button>
          <button onClick={()=>setModalIsOpen(false)}>close</button>
        </form>
      </Modal>
    </>
  );
}

export default AddCommodity;
