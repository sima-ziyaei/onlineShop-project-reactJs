import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/Context";
import { Formik, Field, Form } from "formik";
import {MdManageAccounts} from 'react-icons/md';
import {AiFillLock} from 'react-icons/ai'

export default function ManageForm() {
  const required = "اجباری است";
  const maxLength = "ورودی شما از حداکثر طول بیشتر است";

  const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
  };

  const validateUserName = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value !== "admin") {
      error = "نام کاربری اشتباه است";
    } else if (value.length > 12) {
      error = maxLength;
    }
    return error;
  };

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = required;
    } else if (value !== "admin") {
      error = " رمز عبور اشتباه است";
    }
    return error;
  };

  const { setChangeNav } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          setChangeNav(false);
          navigate("/commodity");
        }, 400);
      }}
    >
      
      {({ errors, touched }) => (
        <div className=" mt-64 mb-20 flex flex-col justify-center items-center w-[100%] h-[500px] ">
          <div className="border-4 border-[#7bdeeb] shadow-outline shadow-2xl w-[30%] h-[90%] rounded text-[#7bdeeb] ">
            <Form className="flex flex-col justify-center items-center">
              <div className="border-2 border-white bg-[#7bdeeb] rounded-2xl text-white w-28 h-10 text-center font-bold absolute top-[52%] pt-1 text-lg">  مدیریت </div>
              <lable className="mt-12 flex w-[100%] text-start mr-[30%] font-bold text-xl">
               <span className="text-2xl mt-1 ml-1"><MdManageAccounts /> </span> نام کاربری
              </lable>
              <Field
                className="border-2  my-4  w-[70%] rounded-md h-12 pr-2 focus:border-[#7bdeeb] focus:outline-none"
                type="text"
                placeholder="نام کاربری"
                name="username"
                validate={validateUserName}
              />
              <div className="text-start text-red-600 font-bold w-[100%] mr-[30%]">
                {errors.username &&
                  touched.username &&
                  errorMessage(errors.username)}
              </div>
              <lable className="mt-10 flex w-[100%] text-start mr-[30%] font-bold text-xl">
                <span className="text-2xl mt-1 ml-1"> <AiFillLock /> </span> رمز عبور
              </lable>
              <Field
                className="border-2 my-4  w-[70%] rounded-md h-12 pr-2 focus:border-[#7bdeeb] focus:outline-none"
                type="password"
                placeholder="رمز عبور"
                name="password"
                validate={validatePassword}
              />
              <div className="text-start text-red-600 font-bold w-[100%] mr-[30%]">
                {errors.password &&
                  touched.password &&
                  errorMessage(errors.password)}
              </div>
              <div className="mb-4">
                <button
                  className="border-2 border-[#7bdeeb] font-bold text-lg h-10 my-4 w-[120px] rounded-xl ml-4 bg-[#7bdeeb] text-white"
                  type="submit"
                >
                  ورود
                </button>
                <button
                  className="border-2 border-[#7bdeeb] my-4 w-[120px] h-10 text-[#7bdeeb] font-bold rounded-xl mr-4 "
                  onClick={() => navigate("/")}
                >
                  {" "}
                  بازگشت به سایت
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}
