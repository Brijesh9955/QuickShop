import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaAmazonPay, FaStar, FaStarHalfAlt, FaOpencart } from 'react-icons/fa';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import { useDispatch, useSelector } from "react-redux";
import { addData } from '../app/slices/DummyData';


const Home = () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.DummyData)
    const history = useHistory()

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
        GetAllData()
    }, [])

    const Card = (id) => {
        localStorage.setItem('id', id)
        history.push('/product')
    }

    const AddToCart = (id) => {
        localStorage.setItem('id', id)
        history.push('/cart')
    }

    return (
        <div>

            {/* Body */}
            <Container fluid>
                <Container>
                    <div className='flex1'>
                        {
                            data.map((el, index) => {
                                return <div key={index}>
                                    <div className="box">
                                        <div className="flex">

                                            <div className="image" onClick={() => Card(el.id)}>
                                                <img src={el.thumbnail} alt="" />
                                            </div>

                                            <div className="body">

                                                <div onClick={() => AddToCart(el.id)} className='cart d-flex justify-content-center align-items-center'>
                                                    <FaOpencart className='bg-white f-18 c-08' />
                                                    <span className='cart1 bg-white'> Add to Cart</span>
                                                </div>

                                                <div className='mb-10'>
                                                    <h2 className='f-18 m-0'>{el.title}</h2>
                                                    <p className='m-0'>{el.description}</p>
                                                </div>

                                                <div>
                                                    <span className='c-yellow'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
                                                    <span className='c-00'>{el.rating}</span>
                                                </div>

                                                <div>
                                                    <span className='f-28'><sup className='f-13'>$</sup>{el.price}</span>
                                                    <span>({el.discountPercentage}% off)</span>
                                                    <span className='c-56 f-14 mb-20'>Save extra with No Cost EMI</span>
                                                </div>

                                                <div className='f-14 sbc mb-10'>
                                                    <span>Stock : <b>{el.stock}</b></span>
                                                    <span>Brand : <b>{el.brand}</b></span>
                                                    <span>Category : <b>{el.category}</b></span>
                                                </div>

                                                <div>
                                                    <span><FaAmazonPay className='c-0d f-30' /></span>
                                                    <div>
                                                        <span className='f-14'>
                                                            <span>FREE delivery </span>
                                                            <b>Thu, 28 Sept </b>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className='f-14'>
                                                            <span>Or fastest delivery </span>
                                                            <b>Tomorrow, 27 Sept </b>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                </Container>

            </Container>

        </div>
    )
}

export default Home