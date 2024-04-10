import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addData } from '../app/slices/DummyData';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const User = () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.DummyData)

    const GetAllData = async () => {
        try {
            let res = await axios.get('https://dummyjson.com/products')
            dispatch(addData([...res.data.products]))
        }
        catch (error) {
            console.log(error.response.data.message);
        }
    }

    useEffect(() => {
        if (data) {
            GetAllData()
        }
    }, [])

    return (
        <Container fluid>
            <Container>
                <Row>
                    <div className='col-12 my-4'>
                        <p className='text-end'><Link to="/create">Add Product</Link></p>
                    </div>
                    {
                        data.map((el, index) => {
                            return <div className="col-12 d-flex justify-content-between p-3 my-2 bg-data">
                                <div>
                                    <h4 className='mb-0'>{el.title}</h4>
                                </div>
                                <div>
                                    <a href="" className='btn'>Delete</a>
                                    <a href="" className='btn'>Update</a>
                                </div>
                            </div>
                        })
                    }
                </Row>
            </Container>
        </Container>
    )
}

export default User