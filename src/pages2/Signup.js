import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Signup = () => {

  const history = useHistory();
  const SignupUser = async (values) => {
    try {
      await axios.post('https://dummyjson.com/users/add', values)
      history.push('/login')
    }
    catch (error) {
      console.log(error.response.data);
    }
  }

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Enter Your firstName !'),
    lastName: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Enter Your lastName !'),
    username: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Enter Your Uname !'),
    password: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Enter Your Password !'),
    phone: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Enter Your phone !'),
    email: Yup.string().email('Invalid email').required('Required')
  });

  return (
    <div>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          phone: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          SignupUser(values);
        }}
      >

        <div className='box-2'>

          <h2>Sign Up</h2>

          <Form>
            <label className='label1' htmlFor="firstName">First Name : <span><ErrorMessage name="firstName" /></span> </label>
            <Field id="firstName" name="firstName" placeholder="First Name" /> <br />

            <label className='label1' htmlFor="lastName">Last Name : <span><ErrorMessage name="lastName" /></span> </label>
            <Field id="lastName" name="lastName" placeholder="Last Name" /> <br />

            <label className='label1' htmlFor="username">User Name :  <span><ErrorMessage name="username" /></span> </label>
            <Field id="username" name="username" placeholder="username" /> <br />

            <label className='label1' htmlFor="email">Email : <span><ErrorMessage name="email" /></span> </label>
            <Field
              id="email"
              name="email"
              placeholder="abc@gmail.com"
              type="email"
            /> <br />

            <label className='label1' htmlFor="password">Password : <span><ErrorMessage name="password" /></span> </label>
            <Field id="password" name="password" placeholder="Password" /> <br />

            <label className='label1' htmlFor="phone">Phone : <span><ErrorMessage name="phone" /></span> </label>
            <Field id="phone" name="phone" placeholder="phone" /> <br />

            <button type="submit">Sign In</button>

          </Form>

        </div>

      </Formik>

    </div>
  )
}

export default Signup