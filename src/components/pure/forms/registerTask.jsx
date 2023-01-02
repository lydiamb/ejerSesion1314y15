import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const RegisterTask = () => {
    
    let task = new Task();

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }
  

    const registerTaskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(6, 'Name is too short')
                .max(15, 'Name is too long')
                .required('Name is required'),
            description: Yup.string()
                .min(10, 'Description in too short')
                .required('Description is required'),
            level: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must selec a Level')
                .default(LEVELS.NORMAL)
                .required('Level is required'),
            completed: Yup.boolean()
                .default(false)
                .required('This field is required')
        }
    )

    const submit = (values) => {
        alert('Register task')
    }

    return (
        <div>
           <h4>Register a Task with Formik</h4>
           <Formik
                initialValues={initialValues}
                validationSchema = {registerTaskSchema}
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
                            <label htmlFor="name">Name of Task</label>
                            <Field id="name" name="name" type="text" placeholder="Your task name" />
                            {
                            errors.name && touched.name &&
                            (
                                
                                <ErrorMessage name="name" component='div'/>
                                
                            )
                            }
                            <label htmlFor="description">Description of Task</label>
                            <Field id="description" name="description" type="text" placeholder="Your task description" />
                            {
                            errors.description && touched.description &&
                            (
                                
                                <ErrorMessage name="description" component='div'/>
                                
                            )
                            }
                            <div id="my-radio-group">Completed</div>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                <Field type="radio" name="picked" value="true" />
                                Sí
                                </label>
                                <label>
                                <Field type="radio" name="picked" value="false" checked />
                                No
                                </label>
                                <div>Picked: {values.picked}</div>
                            </div>
                            
                            <button type="submit">Register Task</button>
                            {isSubmitting ? submit:null}
                        </Form>
                )}
           </Formik>
           
        </div>
    );
}

export default RegisterTask;
