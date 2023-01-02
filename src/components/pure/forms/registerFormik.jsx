import React from 'react';
import { User } from '../../../models/user.class';
import { Formik, Form, Field, ErrorMessage, yupToFormErrors} from 'formik';
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles.enum';
import RegisterForm from './registerForm';

const RegisterFormik = () => {

    let user = new User();


    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(

        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Ivalid email format')
                .required('Email is required'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password to short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password",{
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        '¡Passwords must match'
                    )
                }).required('You must confirm the password')
                
        }
    )


    const submit = (values) => {
        alert('Register user')
    }


    return(
        <div>
            <h4> Register Formik </h4>
            <Formik
                initialValues = {initialValues}
                validationSchema = {registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="username">Username</label>
                            <Field id="username" name="text" placeholder="Your username" />
                            {
                            errors.username && touched.username &&
                                (
                                   
                                    <ErrorMessage name="username" component='div'/>
                                  
                                )
                            }
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="example@email.com" />
                            {
                            errors.email && touched.email &&
                                (
                           
                                   
                                    <ErrorMessage name="email" component='div'/>
                                  
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" placeholder="password" type="password" />
                            {
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name="password" componenent='div'/>                                  
                                )
                            }

                            <label htmlFor="confirm">Password</label>
                            <Field id="confirm" name="confirm" placeholder="confirm password" type="password" />
                            {
                                errors.confirm && touched.confirm &&
                                (
                                    <ErrorMessage name="confirm" componenent='div'/>                                  
                                )
                            }

                            <button type="submit">Register Account</button>
                            {isSubmitting ? (<p>Sending yours credentials....</p>):null}
                        </Form>
               
                    )
                }
            </Formik>
        </div>
    );
}
export default RegisterFormik;