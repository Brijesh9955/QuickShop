import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { addData } from "../app/slices/DummyData";
import { useDispatch } from "react-redux";


const ProductCreate = () => {
  
  const dispatch = useDispatch()
  const history = useHistory()
  const [data, setData] = useState([])
  const [initialValues, setInitialValues] = useState([])


  // useEffect(() => {
  //   let token = localStorage.getItem('token')
  //   if (!token) {
  //     history.push('/login')
  //   }
  // }, [])

  // const update = (id, a, b, c, d, e) => {
  //   const copy = { fname: a, lname: b, contact: c, city: d, country: e }
  //   setInitialValues(copy)
  // }

  return (
    <div>

      <Formik
        initialValues={{ thumbnail: '', title: '', description: '', rating: '', price: '', discountPercentage: '', stock: '', brand: '', category: '', ...initialValues }}

        // validationSchema={SignupSchema}
        enableReinitialize={true}

        onSubmit={async (values, action) => {

          try {
            let token = localStorage.getItem('token')
            console.log(values);
            let res = await axios.post('https://dummyjson.com/products/add', values)
            dispatch(addData([res.data]))
            console.log(res.data);
            history.push('/') 
          }
          catch (error) {
            console.log(error.response.data.message);
          }

          // if(row === null){
          //   try {
          //     let token = localStorage.getItem('token')
          //     let res = await axios.post('http://13.51.56.32:3001/phonebook/create/',values,
          //     {
          //       headers : {usertoken : token}
          //     })
          //     getAllData()
          //     action.resetForm();
          //     console.log(res.data.data);
          //   }
          //   catch (error) {
          //     console.log(error);
          //   }
          // }
          // else{
          //   try {
          //     let token = localStorage.getItem('token')
          //     let res = await axios.patch('http://13.51.56.32:3001/phonebook/update?id='+row,
          //     values,
          //     {
          //       headers : {usertoken : token}
          //     })
          //     getAllData()
          //     setInitialValues('')
          //     console.log(res.data.message);
          //   }
          //   catch (error) {
          //     console.log(error.response.data.message);
          //   }
          //   setRow(null)
          // }
        }}

      >

        <div className='box-2 box-3'>

          <h2>Contact</h2>

          <Form>
            <div className='div-2'>
              <label className='label1' htmlFor="thumbnail">Thumbnail : </label>
              <Field id="thumbnail" type="file" name="thumbnail" placeholder="Thumbnail" /> <br />

              <label className='label1' htmlFor="title">title : </label>
              <Field id="title" name="title" placeholder="title" /> <br />

              <label className='label1' htmlFor="description">description : </label>
              <Field id="description" name="description" placeholder="description" /> <br />

              <label className='label1' htmlFor="rating">rating : </label>
              <Field id="rating" name="rating" placeholder="rating" /> <br />

              <label className='label1' htmlFor="price">price : </label>
              <Field id="price" name="price" placeholder="price" /> <br />
            </div>

            <div className='div-2'>
              <label className='label1' htmlFor="discountPercentage">discountPercentage : </label>
              <Field id="discountPercentage" name="discountPercentage" placeholder="discountPercentage" className="pb-3" /> <br />

              <label className='label1' htmlFor="stock">stock : </label>
              <Field id="stock" name="stock" placeholder="stock" /> <br />

              <label className='label1' htmlFor="brand">brand : </label>
              <Field id="brand" name="brand" placeholder="brand" /> <br />

              <label className='label1' htmlFor="category">category : </label>
              <Field id="category" name="category" placeholder="category" /> <br />

              <label className='label1' htmlFor="title">title : </label>
              <Field id="title" name="title" placeholder="title" /> <br />
            </div>

            <button type="submit"><span>Submit</span></button>

          </Form>

        </div>

      </Formik>

    </div>



  )
}

export default ProductCreate