import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Login = () => {

  const history = useHistory();
  const LoginUser = async (values) => {
    try {
      const res = await axios.post(
        'https://dummyjson.com/auth/login',
        values,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      localStorage.setItem('user', res.data.token)
      history.push('/user')

    } catch (error) {
      console.error("Error:", error.response.data.message);
    }
  };


  const SignupSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Enter Your username !'),
    password: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Enter Your Password !'),
  });

  return (
    <div>

      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          LoginUser(values);
        }}
      >

        <div className='box-2'>

          <h2>Log in</h2>

          <Form>

            <label className='label' htmlFor="username">User Name : <span><ErrorMessage name="username" /></span> </label> <br />
            <Field id="username" name="username" placeholder="username" /> <br />

            <label className='label' htmlFor="password">Password : <span><ErrorMessage name="password" /></span> </label> <br />
            <Field id="password" name="password" placeholder="Password" /> <br />

            <button type="submit">Login</button>

          </Form>

        </div>

      </Formik>

    </div>
  )
}

export default Login