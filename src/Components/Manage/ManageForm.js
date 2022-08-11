import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../Contexts/Context';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';




function ManageForm() {
    const { setChangeNav } = useContext(Context);
    
        return (
            <Formik
                initialValues={{
                   
                    userName: '',
                  
                    password: '',
                   
                    acceptTerms: false
                }}
                validationSchema={Yup.object().shape({
                   
                    userName: Yup.string()
                        .required('User Name is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    acceptTerms: Yup.bool()
                        .oneOf([true], 'Accept Ts & Cs is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
               
            >
                {({ errors, status, touched }) => (
                    <Form className='mt-64'>
                        <div className="form-row">
                            
                            <div className="form-group col-5">
                                <label htmlFor="firstName">User Name</label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                           
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                           
                        </div>
                        
                        <div className="form-group">
                            <Link  to='manage' onClick={() => { setChangeNav(false) }} className='border border-[#7bdeeb] w-64'>Register</Link>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }


export default ManageForm;



// function ManageForm() {

//     const handleSubmit = () => {

//     }



//     const { setChangeNav } = useContext(Context);
//     return (
//         <div className='mt-64 w-[100%] flex justify-center items-center'>
//             <form className='h-96 flex flex-col w-96 justify-center '>
//                 <label for='name' />نام کاربری
//                 <input type='text' name='name' className='border border-[#7bdeeb]' />
//                 <lable for='pass' />رمز عبور
//                 <input type='password' name='pass' className='border border-[#7bdeeb]' />
//                 <Link to='manage' onClick={() => { setChangeNav(false) }} className='border border-[#7bdeeb] w-64'>ورود</Link>

//             </form>
//         </div>
//     );
// }

// export default ManageForm;