import { useNavigate, Navigate } from "react-router-dom";
import { login } from "../redux/usersSlice";
import { Formik, Field, Form } from "formik";
import { MdManageAccounts } from "react-icons/md";
import {AiFillLock} from 'react-icons/ai'
import { useDispatch , useSelector} from "react-redux";
import { useState } from "react";

export default function ManageForm() {
  const required = "اجباری است";
  const maxLength = "ورودی شما از حداکثر طول بیشتر است";
  const dispatch = useDispatch();
  const { error, isLoggedIn } = useSelector((state) => state.users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const errorMessage = (error) => {
  //   return <div className="invalid-feedback">{error}</div>;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    if (isLoggedIn) {
      navigate("/orders");
    } else navigate("/manageform");
  };

  const handleChangeName = (e)=>{
    const {name, value} = e.target;
    setUsername(value)
  }

  const handleChangePassword= (e)=>{
    const {name, value} = e.target;
    setPassword(value)
  }
  // const validateUserName = (value) => {
  //   let error;
  //   if (!value) {
  //     error = required;
  //   } else if (value !== "admin") {
  //     error = "نام کاربری اشتباه است";
  //   } else if (value.length > 12) {
  //     error = maxLength;
  //   }
  //   return error;
  // };



  const navigate = useNavigate();
  if (isLoggedIn) return <Navigate to={'/order'} />;
  return (
    // <Formik
    //   initialValues={{
    //     username: "",
    //     password: "",
    //   }}
    //   onSubmit={(values, { setSubmitting }) => {
    //     setTimeout(() => {
    //       setSubmitting(false);
    //       navigate("/order");
    //     }, 400);
    //   }}
    // >
    //   {({ errors, touched }) => (
        <div className=" mt-64 mb-20 flex flex-col justify-center items-center w-[100%] h-[500px] ">
          <div className="border-4 border-[#ffcaaa] shadow-outline shadow-2xl w-[30%] h-[90%] rounded text-[#013662] ">
            <form  onSubmit={(e) => handleSubmit(e)} className="flex flex-col justify-center items-center">
              <div className="border-2 border-white bg-[#ffcaaa] rounded-2xl text-white w-28 h-10 text-center font-bold absolute top-[52%] pt-1 text-lg">
                {" "}
                مدیریت{" "}
              </div>
              {error && <h6 className="error">{error}</h6>}
              <lable className="mt-12 flex w-[100%] text-start mr-[30%] font-bold text-xl">
                <span className="text-2xl mt-1 ml-1">
                  <MdManageAccounts />{" "}
                </span>{" "}
                نام کاربری
              </lable>
              <input
                className="border-2  my-4  w-[70%] rounded-md h-12 pr-2 focus:border-[#013662] focus:outline-none"
                type="text"
                placeholder="نام کاربری"
                name="username"
                value ={username}
                onChange={handleChangeName}
                // validate={validateUserName}
              />
              <div className="text-start text-red-600 font-bold w-[100%] mr-[30%]">
                {/* {errors.username &&
                  touched.username &&
                  errorMessage(errors.username)} */}
              </div>
              <lable className="mt-10 flex w-[100%] text-start mr-[30%] font-bold text-xl">
                <span className="text-2xl mt-1 ml-1">
                
                  <AiFillLock />
                </span>
                رمز عبور
              </lable>
              <input
                className="border-2 my-4  w-[70%] rounded-md h-12 pr-2 focus:border-[#013662] focus:outline-none"
                type="password"
                placeholder="رمز عبور"
                name="password"
                value={password}
                onChange={handleChangePassword}
                // validate={validatePassword}
              />
              <div className="text-start text-red-600 font-bold w-[100%] mr-[30%]">
                {/* {errors.password &&
                  touched.password &&
                  errorMessage(errors.password)} */}
              </div>
              <div className="mb-4">
                <button
                  className="border-2 border-[#013662] font-bold text-lg h-10 my-4 w-[120px] rounded-xl ml-4 bg-[#013662] text-white"
                  type="submit"
                >
                  ورود
                </button>
                <button
                  className="border-2 border-[#013662] my-4 w-[120px] h-10 text-[#013662] font-bold rounded-xl mr-4 "
                  onClick={() => navigate("/")}
                >
                  {" "}
                  بازگشت به سایت
                </button>
              </div>
            </form>
          </div>
        </div>
    //   )}
    // </Formik>
  );
}
