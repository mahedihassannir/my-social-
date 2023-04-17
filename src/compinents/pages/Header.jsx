import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div>

            <div className='text-center'>
                <img className='mt-5' src={logo} alt="" />
                <p className=''><small className=''></small></p>
                <p className=''>{moment().format("dddd MMMM D YYYY")}</p>
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