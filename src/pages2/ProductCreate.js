import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ProductCreate = () => {
  const history = useHistory();
  const [row, setRow] = useState(null);
  const [initialValues, setInitialValues] = useState({
    thumbnail: '',
    title: '',
    description: '',
    rating: '',
    price: '',
    discountPercentage: '',
    stock: '',
    brand: '',
    category: ''
  });
  const [thumbnailFileName, setThumbnailFileName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      let uid = localStorage.getItem('uid');
      if (uid) {
        setRow(uid);
        try {
          let res = await axios.get('https://dummyjson.com/products/' + uid);
          setInitialValues(res.data);
          // Set filename for display
          setThumbnailFileName(res.data.thumbnail ? res.data.thumbnail.name : '');
        } catch (error) {
          console.log(error.response.data.message);
        }
      }
    };

    fetchData();
  }, []);

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThumbnailFileName(file.name); // Set filename for display
      setInitialValues({ ...initialValues, thumbnail: file }); // Store the file object in state
    }
  };

  const handleSubmit = async (values) => {
    try {
      if (row === null) {
        let res = await axios.post('https://dummyjson.com/products/add', values);
        console.log(res.data);
      } else {
        let res = await axios.patch(`https://dummyjson.com/products/`+ row , values);
        console.log(res.data);
        console.log(res.data.product);
      }
      history.push('/');
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values) => handleSubmit(values)}
      >
        <div className='box-2 box-3'>
          <h2>Contact</h2>
          <Form>
            <div className='div-2'>
              <label className='label1' htmlFor="thumbnail">Thumbnail : </label>
              <input
                id="thumbnail"
                type="file"
                name="thumbnail"
                onChange={handleThumbnailChange}
              />
              <br />
              <label className='label1' htmlFor="title">Title : </label>
              <Field id="title" name="title" placeholder="Title" /> <br />

              <label className='label1' htmlFor="description">Description : </label>
              <Field id="description" name="description" placeholder="Description" /> <br />

              <label className='label1' htmlFor="rating">Rating : </label>
              <Field id="rating" name="rating" placeholder="Rating" /> <br />

              <label className='label1' htmlFor="price">Price : </label>
              <Field id="price" name="price" placeholder="Price" /> <br />
            </div>

            <div className='div-2'>
              <label className='label1' htmlFor="discountPercentage">Discount Percentage : </label>
              <Field id="discountPercentage" name="discountPercentage" placeholder="Discount Percentage" className="pb-3" /> <br />

              <label className='label1' htmlFor="stock">Stock : </label>
              <Field id="stock" name="stock" placeholder="Stock" /> <br />

              <label className='label1' htmlFor="brand">Brand : </label>
              <Field id="brand" name="brand" placeholder="Brand" /> <br />

              <label className='label1' htmlFor="category">Category : </label>
              <Field id="category" name="category" placeholder="Category" /> <br />
            </div>

            <button type="submit"><span>Submit</span></button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default ProductCreate;
