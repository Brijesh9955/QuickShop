import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { FaAmazonPay, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Header';

const Product = () => {

    const [data, setData] = useState([])

    const GetData = async () => {
        try {
            let id = localStorage.getItem('id')
            let res = await axios.get('https://dummyjson.com/products/' + id)
            setData([res.data])
        }
        catch (error) {
            console.log(error.response.data.message);
        }
    }

    useEffect(() => {
        GetData()
    }, [])

    const slider1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    return (
        <div>
            
            {/* Slider */}
            <Container fluid>
                <Row>
                    {
                        data.map((el, index) => {
                            return <div key={index}>

                                <Col xs={12} className='bg-w'>
                                    <div className="image1">
                                        {/* <img src={el.thumbnail} className='sliderr' alt="" /> */}
                                        <Slider {...slider1}>
                                            <div className='sliderr'>
                                                <img src={el.thumbnail} alt="" />
                                            </div>
                                            <div className='sliderr'>
                                                <img src={el.images[0]} alt="" />
                                            </div>
                                            <div className='sliderr'>
                                                <img src={el.images[1]} alt="" />
                                            </div>
                                            <div className='sliderr'>
                                                <img src={el.images[2]} alt="" />
                                            </div>
                                            <div className='sliderr'>
                                                <img src={el.images[3]} alt="" />
                                            </div>
                                            <div className='sliderr'>
                                                <img src={el.images[4]} alt="" />
                                            </div>
                                        </Slider>
                                    </div>

                                </Col>

                            </div>
                        })
                    }
                </Row>
            </Container>

            {/* Body */}
            <Container fluid className='mb-3'>
                <Container>
                    <Row>
                        {
                            data.map((el, index) => {
                                return <div key={index}>

                                    <Col xs={12}>
                                        <div className="box1">
                                            <div className="body1">

                                                <div className='mb-1'>
                                                    <h2 className='f-20 m-0'>{el.title}</h2>
                                                    <p className='m-0'>{el.description}</p>
                                                </div>

                                                <div className='mb-2'>
                                                    <span className='c-yellow'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
                                                    <span className='c-00'>{el.rating}</span>
                                                </div>

                                                <div className=' mb-3'>
                                                    <span className='f-30'><sup className='f-14'>$</sup>{el.price}</span>
                                                    <span>({el.discountPercentage}% off)</span>
                                                    <span className='c-56 f-16'>Save extra with No Cost EMI</span>
                                                </div>

                                                <div className='f-14 sbc mb-3'>
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
                                    </Col>

                                </div>
                            })
                        }
                    </Row>
                </Container>
            </Container>

        </div>
    )
}

export default Product