import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginFormik = () => {

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                    .email('Ivalid email format')
                    .required('Email is required'),
            password: Yup.string().required('Password is required')
        }
    )


    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
                initialValues={ initialCredentials }
                validationSchema= { loginSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values)
                }}
            >

                {/* WE obtain props from Formik */}
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    
                    <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="example@email.com" />
                            {
                                errors.email && touched.email &&
                                (
                                    /*
                                    <div className='error'>
                                        <p>{errors.email}</p>
                                    </div>
                                    */
                                   
                                    <ErrorMessage name="email" component='div'/>
                                  
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" placeholder="password" type="password" />
                            {
                                errors.password && touched.password &&
                                (
                                    /*
                                    <div className='error'>
                                        <p>{errors.password}</p>
                                    </div>
                                    */
                                  
                                    <ErrorMessage name="password" componenent='div'/>
                                   
                                )
                            }

                            <button type="submit">Submit</button>
                            {isSubmitting ? (<p>Login yours credentials....</p>):null}
                        </Form>

                )}

            </Formik>
        </div>
        
    );
}

export default LoginFormik;
