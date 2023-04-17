import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button } from 'bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>

            <div className='text-center'>
                <img className='mt-5' src={logo} alt="" />
                <p className='py-2'><small className=''>Journalism Without Fear or Favour</small></p>
                <p className=''>{moment().format("dddd MMMM D YYYY")}</p>
            </div>

            <div className=' d-flex w-50 mx-auto'>
                <button>latest </button>
                <Marquee speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>

            </div>




            <nav>
                <ul className='flex text-center '>
                    <Link className='pl-5' to="/">Home</Link>
                    <Link className='pl-5' to="/About">About</Link>
                    <Link className='pl-5' to="/Career">Career</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;