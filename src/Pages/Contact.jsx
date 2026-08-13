import './Contact.css';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

function Contact() {

    return (
        <>
            <div>
                <Navbar />
                <section className="page-hero">
                    <div className="wrap">
                        <p className="eyebrow">Get In Touch</p>
                        <h1>Let's build your website.</h1>
                        <p>Have a question, found a website you like, or need something custom? We'd love to hear from you.</p>
                    </div>
                </section>

                <section className="contact-section">
                    <div className="wrap contact-grid">
                        {/* <form className="form-card" id="enquiryForm">
                            <div className="field-row">
                                <div className="field">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your full name" required>
                                    </input>
                                </div>
                                <div className="field">
                                    <label for="business">Business Name</label>
                                    <input type="text" id="business" name="business" placeholder="Your business name">
                                    </input>
                                </div>
                            </div>
                            <div className="field-row">
                                <div className="field">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="you@business.com" required>
                                    </input>
                                </div>
                                <div className="field">
                                    <label for="phone">WhatsApp / Phone</label>
                                    <input type="tel" id="phone" name="phone" placeholder="+234...">
                                    </input>
                                </div>
                            </div>
                            <div className="field">
                                <label for="need">What do you need?</label>
                                <select id="need" name="need">
                                    <option value="">Select an option</option>
                                    <option value="website">I want one of the websites</option>
                                    <option value="custom">I need a custom website</option>
                                    <option value="question">I have a question</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="field">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" placeholder="Tell us a little about what you need..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary form-submit">Send Enquiry <span className="arrow">→</span></button>
                            <p className="form-note">We usually reply within one business day.</p>
                        </form> */}

                        <div>
                            <div className="direct-card">
                                <h3>Don't be shy, reach us directly.</h3>
                                <h4>Even if it's just to make enquiries.</h4>
                                <div className="direct-item">
                                    <div className="direct-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.55L3 20l1.05-5.4A8.5 8.5 0 1 1 21 11.5Z" /></svg></div>
                                    <div className="direct-text">
                                        <p className="direct-label">WhatsApp</p>
                                        <a href="https://wa.me/2340000000000" className="direct-value">+234 000 000 0000</a>
                                    </div>
                                </div>

                                <div className="direct-item">
                                    <div className="direct-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></div>
                                    <div className="direct-text">
                                        <p className="direct-label">Email</p>
                                        <a href="mailto:hello@studiosite.com" className="direct-value">hello@studiosite.com</a>
                                    </div>
                                </div>

                                <div className="direct-item">
                                    <div className="direct-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" /></svg></div>
                                    <div className="direct-text">
                                        <p className="direct-label">Phone</p>
                                        <a href="tel:+2340000000000" className="direct-value">+234 000 000 0000</a>
                                    </div>
                                </div>
                            </div>

                            <div className="whatsapp-note">
                                <p><strong>Quicker on WhatsApp.</strong> Most of our clients prefer to send their logo, images and business details straight over WhatsApp — it's the fastest way for us to get started.</p>
                            </div>
                        </div>

                    </div>
                </section>
                <footer id="footer">
                    <div className="wrap">

                        <div className="footer-top">

                            <div className="footer-brand">

                                <Link to="/" className="brand">
                                    <span className="dot"></span>
                                    SpireTech
                                </Link>

                                <p>
                                    Professionally designed websites,
                                    customised for your business.
                                </p>

                            </div>


                            <div className="footer-col">

                                <h4>Explore</h4>

                                <Link to="/websites">
                                    Websites
                                </Link>

                                <Link to="/how-it-works">
                                    How It Works
                                </Link>

                                <Link to="/portfolio">
                                    Portfolio
                                </Link>

                            </div>


                            <div className="footer-col">

                                <h4>Company</h4>

                                <Link to="/about">
                                    About
                                </Link>

                                <Link to="/contact">
                                    Contact
                                </Link>

                                <Link to="/faq">
                                    FAQ
                                </Link>

                            </div>


                            <div className="footer-col">

                                <h4>Connect</h4>

                                <Link to="#">
                                    WhatsApp
                                </Link>

                                <Link to="#">
                                    Email
                                </Link>

                                <Link to="#">
                                    Instagram
                                </Link>

                                <Link to="#">
                                    LinkedIn
                                </Link>

                            </div>

                        </div>


                        <div className="footer-bottom">

                            <p>
                                © 2026 SpireTech. All rights reserved.
                            </p>

                        </div>

                    </div>
                </footer>

            </div>
        </>
    );
}

export default Contact;