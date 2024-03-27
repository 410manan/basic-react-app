import React from 'react';
import './Footer.css'; // Import your CSS styles for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-sm-6 ">
                        <h4>Useful Links</h4>
                        <ul>
                            <a href="#">Home</a><br/>
                            <a href="#">Register Now</a><br />
                            <a href="#">Products</a><br />
                            <a href="#">New Arrivals</a><br />
                            <a href="#">Clearance Sale</a><br />
                            <a href="#">Cigar Tax Calculator</a><br/>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6 ">
                        <h4>About</h4>
                        <ul>
                            <a href="#">Orders</a><br/>
                            <a href="#">Contact Us</a><br/>
                            <a href="#">Return Policy</a><br/>
                            <a href="#">Privacy Policy</a><br/>
                            <a href="#">Stores</a><br/>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6 ">
                        <h4>Working hours</h4>
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
                        <h4>Contact Us</h4>
                        <ul>
                            <a href="#">(+1) 516 513 1522</a><br/>
                                <a href="#">(+1) 516 492 4224</a><br/>
                                libertysmoke@support.com<br />
                                188 Quality Plaza, Hicksville, NY ,11801<br />
                                102 West 29th St, NY, 10001<br />
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
                </div>
                <div className="copyRights">
                    © Liberty Smoke Distributors - All Rights Reserved
                </div>
        </footer>
    );
}

export default Footer;
