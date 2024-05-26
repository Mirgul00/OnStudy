import React from 'react'
import "./Footer.css"
import { FaFacebook, FaTiktok, FaInstagram, FaChrome} from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="ft-1">
                            <h3><span>WALEED</span>CODES</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                            <a href="/basket"><FaFacebook className="icon" /></a>
                            <a href="/basket"><FaInstagram className="icon" /></a>
                            <a href="/login"><FaTiktok className="icon" /></a>
                            <a href="/login"><FaChrome className="icon" /></a>
                            </div>
                        </div>
                        <div className="ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +92 3121324083</p>
                            <p><i class="fa-solid fa-envelope"></i> waleedishfaq1515@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Abbottabad, Pakistan.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Design By Waleed Ishfaq</p>
            </div>
        </>
    )
}

export default Footer