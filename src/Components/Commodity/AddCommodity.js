import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { BsX } from "react-icons/bs";
import MultiImageInput from 'react-multiple-image-input';
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    thumbnail:'',
    stock: "",
    off: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    price: "",
    category: "",
    subCategory: "",
    information: "",
    photo: [],
    thumbnail:'',
    stock: "",
    off: "",
  })
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100"
  };

  const [images, setImages] = useState({});

  // const handlePhoto = (e) => {
  //   const uploadeFile = e.target.files[0] ;
    
  //   setFormData((prev) => ({ ...prev, photo:e.target.files[0] }));
  // };

  const openModal = () => {
    setModalIsOpen(true);
  };

  

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(formData.photo);
    setFormData((prev) => ({ ...prev, photo:images }));

    if(formData.name === '' || formData.price === '' || formData.stock === '' || formData.information === '' || formData.category === '' || formData.subCategory === '' || formData.photo === [] || formData.thumbnail === '' || formData.off === '' ){
      toast.error(" !همه ی اطلاعات را پر کنید ", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
   else{
     axios
        .post(`http://localhost:3001/products`, formData)
        .then((response) => setImages([]))
        .catch((err) => alert(err.message));
      setModalIsOpen(false);
      toast.success( " !کالا اضافه شد ", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({
        name: "",
        price: "",
        category: "",
        subCategory: "",
        information: "",
        photo: [],
        thumbnail:'',
        stock: "",
        off: "",
      })

   }
    
    
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

  };

  // useEffect(()=>{
  //   validate()
  // },[errors])

  return (
    <div>
      <button
        onClick={() => openModal()}
        className="border-2 font-bold p-3  rounded-2xl border-[#013662] text-[#013662] hover:bg-[#013662] hover:text-white "
      >
        افزودن کالا
      </button>
      <Modal
        isOpen={modalIsOpen}
        className="w-[50%] absolute overflow-y-auto max-h-screen bg-white border p-4 top-[0%] left-[25%]"
      >
        <div className="flex justify-between m-2 mr-0 mt-0">
          <span className="font-extrabold text-2xl border-b-2 border-[#013662] text-[#013662]">
            {" "}
            افزودن کالا{" "}
          </span>
          <span
            onClick={() => {
              setModalIsOpen(false);
              setFormData({
                name: "",
                price: "",
                category: "",
                subCategory: "",
                information: "",
                photo: [],
                stock: "",
                off: "",
              })
            }}
            className="cursor-pointer text-2xl"
          >
            <BsX />
          </span>
        </div>
        <form className="flex flex-col">
          {/* <input type="file" multiple min={1} max={4} onChange={handlePhoto} /> */}
          {/* {formData.photo !==[] ? formData.photo.map((photo)=>{
              <img  src={``} />
          }):""} */}
          <MultiImageInput
      images={images}
      setImages={setImages}
      allowCrop={false}
      theme={"light"}
      cropConfig={{ crop, ruleOfThirds: true }}
    />

    <input type='file' name='thumbnail' onChange={handleFormData}  />
          نام کالا
          <input
            type="text"
            name="name"
            onChange={handleFormData}
            className="border-2 outline-none rounded-sm pr-2 border-[#013662] my-2"
          />
          قیمت
          <input
            type="text"
            name="price"
            onChange={handleFormData}
            className="border-2 outline-none rounded-sm pr-2 border-[#013662] my-2"
          />
          موجودی
          <input
            type="text"
            name="stock"
            onChange={handleFormData}
            className="border-2 outline-none rounded-sm pr-2 border-[#013662] my-2"
          />
          تخفیف
          <input
            type="text"
            name="off"
            onChange={handleFormData}
            className="border-2 outline-none rounded-sm pr-2 border-[#013662] my-2"
          />
          دسته بندی
          <select
            name="category"
            onChange={handleFormData}
            className="border-2 outline-none rounded-sm pr-2 border-[#013662] my-2"
          >
            {category.map((el) => {
              return <option onChange={handleFormData} name="category" value={el.name}> {el.name} </option>;
            })}
          </select>
          <select
            name="subCategory"
            onChange={handleFormData}
            style={
              formData.category ? { display: "block" } : { display: "none" }
            }
            className="border-2 outline-none rounded-sm pr-2 border-[#013662] my-2"
          >
            {category.map((item) => {
              if (formData.category == item.name) {
                return subCategory.map((el) => {
                  if (item.id == el.category) {
                    return <option value={el.name}> {el.name} </option>;
                  }
                });
              }
            })}
          </select>
          توضیحات
          <CKEditor
            editor={ClassicEditor}
            data={formData.information}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFormData((prev) => ({ ...prev, information: data }));
            }}
          />
          <button onClick={handleSubmit} className="w-[20%]  mr-[40%] my-2 font-bold  border-2 border-[#013662] text-[#013662] hover:bg-[#013662] hover:text-white p-3 rounded-xl"> اضافه کردن </button>
        </form>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default AddCommodity;
