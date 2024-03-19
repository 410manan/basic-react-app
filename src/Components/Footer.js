import React from 'react';
import './Footer.css'; // Import your CSS styles for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-sm-6">
                        <h6 style={{ color: 'white' }}>Useful Links</h6>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Register Now</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Clearance Sale</a></li>
                            <li><a href="#">Cigar Tax Calculator</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6">
                        <h6 style={{ color: 'white' }}>About</h6>
                        <ul>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Return Policy</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Stores</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6">
                        <h6 style={{ color: 'white' }}>Working hours</h6>
                        <ul>
                            <li>Monday - Friday: <br />
                                09:00 AM - 07:00 PM<br />
                            </li>
                            <li>
                                Saturday: <br />
                                10:00 AM - 06:00 PM<br />
                            </li>
                            <li>
                                Sunday: Closed<br />
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6">
                        <h6 style={{ color: 'white' }}>Contact Us</h6>
                        <ul>
                            <li className="telNo"><a href="#">(+1) 516 513 1522</a>
                                <a href="#">(+1) 516 492 4224</a></li>
                            <li>
                                libertysmoke@support.com<br />
                            </li>
                            <li>
                                188 Quality Plaza, Hicksville, NY ,11801<br />
                            </li>
                            <li>
                                102 West 29th St, NY, 10001<br />
                            </li>
                        </ul>
                        <div className="social-media">
                            <a href="#" target="_blank">
                                <i aria-hidden="true" className="fa fa-facebook"></i>
                            </a>
                            <a href="#" target="_blank">
                                <i aria-hidden="true" className="fa fa-whatsapp"></i>
                            </a>
                            <a href="#" target="_blank">
                                <i aria-hidden="true" className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copyRights">
                    © Liberty Smoke Distributors - All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
