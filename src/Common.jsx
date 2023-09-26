import React from 'react'
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section className='d-flex align-items-center' id='header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1
                                        className='mt-5'
                                    >{props.name}<br />
                                        {props.name2}</h1>
                                    <p
                                        className=' text-success mt-2'
                                    >{props.pelm} </p>
                                    <NavLink to={props.visit} className='btn mt-3 btn-get-started'
                                    >{props.btn}</NavLink>
                                </div>
                                <div className='col-md-6 order-1 order-lg-2 header-image'>
                                    <img
                                        src={props.imgSrc}
                                        className='img-fluid image mt-5 animated'
                                        alt='homeimg' />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;