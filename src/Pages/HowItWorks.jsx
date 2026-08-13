import './Websites.css';
import './HowItWorks.css';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

function HowItWorks() {

    return (
        <>
            <div>
                <Navbar />

                <section className="page-hero">
                    <div className="wrap">
                        <h1>From choosing a design to going live.</h1>
                        <p>Getting your business online doesn't have to be complicated.</p>
                    </div>
                </section>

                <section className="process">
                    <div className="wrap">
                        <div className="process-track">

                            <div className="step-row">
                                <div className="step-marker">01</div>
                                <div className="step-content">
                                    <p className="step-label">Step One</p>
                                    <h3>Choose your website</h3>
                                    <p>Browse our collection and select the design that best fits your business.</p>
                                </div>
                            </div>

                            <div className="step-row">
                                <div className="step-marker">02</div>
                                <div className="step-content">
                                    <p className="step-label">Step Two</p>
                                    <h3>Tell us about your business</h3>
                                    <p>Send us your logo, company information, images, services, contact details and other content.</p>
                                </div>
                            </div>

                            <div className="step-row">
                                <div className="step-marker">03</div>
                                <div className="step-content">
                                    <p className="step-label">Step Three</p>
                                    <h3>We customise it</h3>
                                    <p>We replace the demo content and adapt the website to your brand.</p>
                                </div>
                            </div>

                            <div className="step-row">
                                <div className="step-marker">04</div>
                                <div className="step-content">
                                    <p className="step-label">Step Four</p>
                                    <h3>Review</h3>
                                    <p>We'll give you access to the website so you can review it and request changes.</p>
                                </div>
                            </div>

                            <div className="step-row">
                                <div className="step-marker">05</div>
                                <div className="step-content">
                                    <p className="step-label">Step Five</p>
                                    <h3>Launch</h3>
                                    <p>Once everything is approved, your website goes live.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="provide">
                    <div className="wrap provide-inner">
                        <div>
                            <p className="eyebrow on-dark">Before we start</p>
                            <h2>What you'll need to provide.</h2>
                            <p>Having these ready speeds up the whole process — the sooner we have your content, the sooner your website can go live.</p>
                        </div>
                        <div className="provide-list">
                            <div className="provide-item">
                                <div className="provide-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></svg></div>
                                <span>Logo</span>
                            </div>
                            <div className="provide-item">
                                <div className="provide-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></svg></div>
                                <span>Business name</span>
                            </div>
                            <div className="provide-item">
                                <div className="provide-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></svg></div>
                                <span>Company description</span>
                            </div>
                            <div className="provide-item">
                                <div className="provide-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></svg></div>
                                <span>Services</span>
                            </div>
                            <div className="provide-item">
                                <div className="provide-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></svg></div>
                                <span>Images</span>
                            </div>
                            <div className="provide-item">
                                <div className="provide-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></svg></div>
                                <span>Contact information</span>
                            </div>
                            <div className="provide-item">
                                <div className="provide-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></svg></div>
                                <span>Social media links</span>
                            </div>
                            <div className="provide-item">
                                <div className="provide-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></svg></div>
                                <span>Other relevant content</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="wrap">
                        <p className="eyebrow">Ready to get started?</p>
                        <h2>Choose your website and let's begin.</h2>
                        <p>Browse our collection, pick a design you love, and we'll take care of the rest.</p>
                        <a href="websites.html" className="btn btn-primary">Browse Websites <span className="arrow">→</span></a>
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

export default HowItWorks;