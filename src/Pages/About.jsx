
// import './About.css';
// import Navbar from '../components/Navbar';
// import { Link } from "react-router-dom";

// function About() {
//     return (
//         <>
//             <div>
//                 <Navbar />
//                 <section className="page-hero">
//                     <div className="wrap">
//                         <p className="eyebrow">About Us</p>
//                         <h1>We make professional websites quicker to get.</h1>
//                     </div>
//                 </section>

//                 <section className="intro">
//                     <div className="wrap">
//                         <div className="intro-inner">
//                             <p>We believe businesses shouldn't have to start from a blank screen every time they need a website.</p>
//                             <p>Our collection of professionally designed websites gives businesses a faster starting point, while allowing every website to be <strong>customised around their brand and needs</strong>. You choose a design that already fits how your business works — we handle the rest.</p>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="approach">
//                     <div className="wrap">
//                         <div className="section-head">
//                             <p className="eyebrow">How We Work</p>
//                             <h2>Our approach.</h2>
//                         </div>
//                         <div className="approach-grid">
//                             <div className="approach-card">
//                                 <div className="approach-num">01</div>
//                                 <h3>Designed with purpose</h3>
//                                 <p>We create websites around real business needs.</p>
//                             </div>
//                             <div className="approach-card">
//                                 <div className="approach-num">02</div>
//                                 <h3>Built for flexibility</h3>
//                                 <p>Every design can be adapted to your brand.</p>
//                             </div>
//                             <div className="approach-card">
//                                 <div className="approach-num">03</div>
//                                 <h3>Focused on quality</h3>
//                                 <p>Clean design, responsive layouts and modern functionality.</p>
//                             </div>
//                             <div className="approach-card">
//                                 <div className="approach-num">04</div>
//                                 <h3>Simple process</h3>
//                                 <p>Choose → customise → review → launch.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="process-strip">
//                     <div className="wrap">
//                         <p className="eyebrow on-dark">The Journey</p>
//                         <h2>From discovery to launch, in four moves.</h2>
//                         <div className="flow">
//                             <span className="flow-step">Choose</span>
//                             <span className="flow-arrow">→</span>
//                             <span className="flow-step">Customise</span>
//                             <span className="flow-arrow">→</span>
//                             <span className="flow-step">Review</span>
//                             <span className="flow-arrow">→</span>
//                             <span className="flow-step">Launch</span>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="final-cta">
//                     <div className="wrap">
//                         <p className="eyebrow">Ready to get started?</p>
//                         <h2>Let's get your business online.</h2>
//                         <p>Browse our collection, choose a design you love, and let us make it yours.</p>
//                         <a href="websites.html" className="btn btn-primary">Browse Websites <span className="arrow">→</span></a>
//                     </div>
//                 </section>
//                 <footer id="footer">
//                     <div className="wrap">
//                         <div className="footer-top">
//                             <div className="footer-brand">
//                                 <Link className="brand"><span className="dot"></span>SpireTech</Link>
//                                 <p>Professionally designed websites, customised for your business.</p>
//                             </div>
//                             <div className="footer-col">
//                                 <h4>Explore</h4>
//                                 <a href="#featured">Websites</a>
//                                 <a href="#why">How It Works</a>
//                                 <Link>Portfolio</Link>
//                             </div>
//                             <div className="footer-col">
//                                 <h4>Company</h4>
//                                 <Link>About</Link>
//                                 <a href="#footer">Contact</a>
//                                 <Link>FAQ</Link>
//                             </div>
//                             <div className="footer-col">
//                                 <h4>Connect</h4>
//                                 <Link>WhatsApp</Link>
//                                 <Link>Email</Link>
//                                 <Link>Instagram</Link>
//                                 <Link>LinkedIn</Link>
//                             </div>
//                         </div>
//                         <div className="footer-bottom">
//                             <p>© 2026 SpireTech. All rights reserved.</p>
//                         </div>
//                     </div>
//                 </footer>
//             </div>
//         </>
//     )
// }

// export default About
import './About.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <Navbar />

            <section className="page-hero">
                <div className="wrap">
                    <p className="eyebrow">About Us</p>
                    <h1>We make professional websites quicker to get.</h1>
                </div>
            </section>

            <section className="intro">
                <div className="wrap">
                    <div className="intro-inner">
                        <p>
                            We believe businesses shouldn't have to start from a blank
                            screen every time they need a website.
                        </p>

                        <p>
                            Our collection of professionally designed websites gives
                            businesses a faster starting point, while allowing every
                            website to be{' '}
                            <strong>
                                customised around their brand and needs
                            </strong>
                            . You choose a design that already fits how your business
                            works — we handle the rest.
                        </p>
                    </div>
                </div>
            </section>

            <section className="approach">
                <div className="wrap">
                    <div className="section-head">
                        <p className="eyebrow">How We Work</p>
                        <h2>Our approach.</h2>
                    </div>

                    <div className="approach-grid">
                        <div className="approach-card">
                            <div className="approach-num">01</div>
                            <h3>Designed with purpose</h3>
                            <p>
                                We create websites around real business needs.
                            </p>
                        </div>

                        <div className="approach-card">
                            <div className="approach-num">02</div>
                            <h3>Built for flexibility</h3>
                            <p>
                                Every design can be adapted to your brand.
                            </p>
                        </div>

                        <div className="approach-card">
                            <div className="approach-num">03</div>
                            <h3>Focused on quality</h3>
                            <p>
                                Clean design, responsive layouts and modern
                                functionality.
                            </p>
                        </div>

                        <div className="approach-card">
                            <div className="approach-num">04</div>
                            <h3>Simple process</h3>
                            <p>
                                Choose → customise → review → launch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="process-strip">
                <div className="wrap">
                    <p className="eyebrow on-dark">The Journey</p>

                    <h2>From discovery to launch, in four moves.</h2>

                    <div className="flow">
                        <span className="flow-step">Choose</span>
                        <span className="flow-arrow">→</span>

                        <span className="flow-step">Customise</span>
                        <span className="flow-arrow">→</span>

                        <span className="flow-step">Review</span>
                        <span className="flow-arrow">→</span>

                        <span className="flow-step">Launch</span>
                    </div>
                </div>
            </section>

            <section className="final-cta">
                <div className="wrap">
                    <p className="eyebrow">Ready to get started?</p>

                    <h2>Let's get your business online.</h2>

                    <p>
                        Browse our collection, choose a design you love, and let
                        us make it yours.
                    </p>

                    <Link to="/websites" className="btn btn-primary">
                        Browse Websites <span className="arrow">→</span>
                    </Link>
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
                                Professionally designed websites, customised for
                                your business.
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

                            <a
                                href="https://wa.me/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                WhatsApp
                            </a>

                            <a href="mailto:your@email.com">
                                Email
                            </a>

                            <a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </div>

                    </div>

                    <div className="footer-bottom">
                        <p>
                            © 2026 SpireTech. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default About;