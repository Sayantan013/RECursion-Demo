import React from 'react';
import { Link }  from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <div className = 'footer-container'>
           <section className="footer-subsciption">
               <p className="footer-subscription-heading">
                   Contribute to this community
               </p>
               <p className="footer-subscription-text">© 2021 RECursion. All Rights Reserved.</p>
            </section> 
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contacts</h2>
                        <Link to='/'>Address:</Link>
                        <Link to='/'>Email:</Link>
                        <Link to='/'>Phone:</Link>

                    </div>
                    <div className="footer-link-items">
                        <h2>Link</h2>
                        <Link to='/'>AskREC</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Events</Link>
                        <Link to='/'>Get Started</Link>
                        <Link to='/'>Faculty Advisors</Link>
                        <Link to='/'>Team</Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer
