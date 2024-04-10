import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { addData } from '../app/slices/DummyData';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../app/slices/DummyData";

const User = () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.DummyData)
    let history = useHistory()

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
        let token = localStorage.getItem('user')
        if (!token) {
            history.push('/login')
        }
        if (data) {
            GetAllData()
        }
    }, [])

    const remove = async (id) => {
        try {
            const res = await axios.delete('https://dummyjson.com/products/' + id)
            console.log(res.data);
            dispatch(deleteData(id))
        }
        catch (error) {
            console.log(error.response.data.message);
        }
    }

    const update = (id) => {
        localStorage.setItem('uid',id)
        history.push('/create')
    }

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
                                    <button onClick={() => remove(index)}>Delete</button>
                                    <button onClick={() => update(el.id)}>update</button>
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