import {  useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Contexts/Context";
import { Formik, Field, Form } from "formik";

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
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          setChangeNav(false);
          navigate("/commodity");
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <div className=" mt-64 mb-20 flex flex-col justify-center items-center w-[100%] h-[500px]">
          <div className="border-2 border-[#ffbd07] w-[30%] h-[90%] rounded-2xl">
            <Form className="flex flex-col justify-center items-center">
              <lable className="mt-20 w-[100%] text-start mr-[30%] font-bold">
                نام کاربری
              </lable>
              <Field
                className="border-2 border-[#fad761] my-4  w-[70%] rounded-md h-12 pr-2"
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
              <lable className="mt-10 w-[100%] text-start mr-[30%] font-bold">
                رمز عبور
              </lable>
              <Field
                className="border-2 border-[#fad761] my-4  w-[70%] rounded-md h-12 pr-2"
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
              <button className="border-2 border-[#ffbd07] my-4" type="submit">
                Submit
              </button>
              <button className="border-2 border-[#ffbd07] my-4" onClick={()=>navigate('/')}> بازگشت به سایت</button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}
