import './Home.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import beautydemoBG from '../../public/beautydemoBG.png';

function Home() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />

            <section className="hero" id="hero">
                <div className="wrap hero-grid">
                    <div>
                        <p className="eyebrow">Ready-made. Customised. Yours.</p>

                        <h1>
                            A professional website,{' '}
                            <span className="hl">
                                ready for your business.
                            </span>
                        </h1>

                        <p className="desc">
                            Choose a professionally designed website and we'll
                            customise it with your brand, content and business
                            information.
                        </p>

                        <div className="hero-ctas">
                            <Link
                                to="/websites"
                                className="btn btn-primary"
                            >
                                Browse Websites
                            </Link>

                            <Link
                                to="/how-it-works"
                                className="btn btn-outline"
                            >
                                How It Works
                            </Link>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-shape"></div>

                        <div className="browser-mock">
                            <div className="browser-bar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="browser-body">
                                <div className="bm-line"></div>
                                <div className="bm-line"></div>
                                <div className="bm-hero"></div>

                                <div className="bm-cards">
                                    <div className="bm-card"></div>
                                    <div className="bm-card"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="home2">
                <section className="trust">
                    <div className="wrap trust-grid">

                        <div className="trust-item">
                            <div className="trust-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <rect
                                        x="3"
                                        y="4"
                                        width="18"
                                        height="14"
                                        rx="2"
                                    />
                                    <path d="M3 9h18" />
                                </svg>
                            </div>

                            <h3>Professionally Designed</h3>
                            <p>Modern layouts built for real businesses.</p>
                        </div>

                        <div className="trust-item">
                            <div className="trust-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <path d="M4 6h16M4 12h10M4 18h16" />
                                </svg>
                            </div>

                            <h3>Fully Customised</h3>
                            <p>Your branding, content and imagery.</p>
                        </div>

                        <div className="trust-item">
                            <div className="trust-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <rect
                                        x="6"
                                        y="2"
                                        width="12"
                                        height="20"
                                        rx="2"
                                    />
                                    <path d="M10 18h4" />
                                </svg>
                            </div>

                            <h3>Mobile Responsive</h3>
                            <p>Looks great across every screen.</p>
                        </div>

                        <div className="trust-item">
                            <div className="trust-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <path d="M13 2 3 14h7l-1 8 11-14h-7l0-6Z" />
                                </svg>
                            </div>

                            <h3>Ready to Launch</h3>
                            <p>A faster route to getting online.</p>
                        </div>

                    </div>
                </section>
            </div>

            <section className="featured" id="featured">
                <div className="wrap">

                    <div className="section-head">
                        <p className="eyebrow">Explore Our Websites</p>

                        <h2>
                            Find a website that fits your business.
                        </h2>

                        <p>
                            Start with a design you love. We'll customise it
                            to make it yours.
                        </p>
                    </div>

                    <div className="cards-grid">

                        <div className="card">
                            <div className="card-thumb"
                                style={{
                                    backgroundImage: `url(${beautydemoBG})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                            <span className="tag">
                                Engineering
                            </span>
                        </div>

                        <h3>Beauty Pro</h3>

                        <p>
                            Professional website for engineering and
                            construction companies.
                        </p>

                        <div className="card-foot">
                            <div className="card-price">
                                <span>starting from</span>
                                ₦80,000
                            </div>

                            <Link
                                to="https://beauty-demo1.vercel.app/"
                                className="card-link"
                            >
                                View Website →
                            </Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-thumb">
                            <span className="tag">
                                Solar &amp; Energy
                            </span>
                        </div>

                        <h3>SolarTech</h3>

                        <p>
                            Modern website for solar, inverter and
                            renewable-energy businesses.
                        </p>

                        <div className="card-foot">
                            <div className="card-price">
                                <span>starting from</span>
                                ₦350,000
                            </div>

                            <Link
                                to="/websites/solar-tech"
                                className="card-link"
                            >
                                View Website →
                            </Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-thumb">
                            <span className="tag">
                                Construction
                            </span>
                        </div>

                        <h3>BuildPro</h3>

                        <p>
                            Professional website for construction and
                            property development companies.
                        </p>

                        <div className="card-foot">
                            <div className="card-price">
                                <span>starting from</span>
                                ₦400,000
                            </div>

                            <Link
                                to="/websites/build-pro"
                                className="card-link"
                            >
                                View Website →
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="featured-bottom">
                    <Link to="/websites">
                        View All Websites <span>→</span>
                    </Link>
                </div>

            </div>
        </section >

            <section className="why" id="why">
                <div className="wrap">

                    <div className="section-head">
                        <p className="eyebrow on-dark">
                            A Better Way To Build Your Website
                        </p>

                        <h2>
                            Skip the long, complicated website process.
                        </h2>

                        <p>
                            You don't need to wait weeks for a website to be
                            designed from scratch. Choose a professionally
                            built foundation and we'll tailor it to your
                            business.
                        </p>
                    </div>

                    <div className="steps">

                        <div className="step">
                            <div className="step-num">01</div>
                            <h3>Choose your design</h3>
                            <p>
                                Find a website that matches your business
                                and style.
                            </p>
                        </div>

                        <div className="step">
                            <div className="step-num">02</div>
                            <h3>Make it yours</h3>
                            <p>
                                We customise the branding, content, images
                                and details.
                            </p>
                        </div>

                        <div className="step">
                            <div className="step-num">03</div>
                            <h3>Review your website</h3>
                            <p>
                                See your finished website before it goes live.
                            </p>
                        </div>

                        <div className="step">
                            <div className="step-num">04</div>
                            <h3>Launch</h3>
                            <p>
                                Once you're happy, we put your website online.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="showcase">
                <div className="wrap showcase-grid">

                    <div>
                        <div className="section-head">
                            <h2>
                                Designed to make your business look its best.
                            </h2>

                            <p>
                                Every website is designed to give your
                                customers a professional first impression —
                                on desktop, tablet and mobile.
                            </p>
                        </div>
                    </div>

                    <div className="showcase-visual">
                        <div className="device-desktop">
                            <div className="dscreen"></div>
                        </div>

                        <div className="device-mobile">
                            <div className="mscreen"></div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="included" id="included">
                <div className="wrap included-inner">

                    <div className="section-head">
                        <p className="eyebrow">What You Get</p>

                        <h2>
                            Everything you need to go live.
                        </h2>

                        <p>
                            A professional website without the unnecessary
                            complexity.
                        </p>
                    </div>

                    <div className="checklist">

                        <div className="check-item">
                            <span className="check-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M4 12l5 5L20 6" />
                                </svg>
                            </span>
                            Custom branding
                        </div>

                        <div className="check-item">
                            <span className="check-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M4 12l5 5L20 6" />
                                </svg>
                            </span>
                            Your company content
                        </div>

                        <div className="check-item">
                            <span className="check-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M4 12l5 5L20 6" />
                                </svg>
                            </span>
                            Your images
                        </div>

                        <div className="check-item">
                            <span className="check-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M4 12l5 5L20 6" />
                                </svg>
                            </span>
                            Mobile responsive design
                        </div>

                        <div className="check-item">
                            <span className="check-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M4 12l5 5L20 6" />
                                </svg>
                            </span>
                            Contact forms
                        </div>

                        <div className="check-item">
                            <span className="check-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M4 12l5 5L20 6" />
                                </svg>
                            </span>
                            WhatsApp integration
                        </div>

                        <div className="check-item">
                            <span className="check-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M4 12l5 5L20 6" />
                                </svg>
                            </span>
                            Social media links
                        </div>

                        <div className="check-item">
                            <span className="check-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M4 12l5 5L20 6" />
                                </svg>
                            </span>
                            Basic SEO
                        </div>

                        <div className="check-item">
                            <span className="check-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M4 12l5 5L20 6" />
                                </svg>
                            </span>
                            Domain connection
                        </div>

                        <div className="check-item">
                            <span className="check-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M4 12l5 5L20 6" />
                                </svg>
                            </span>
                            Website deployment
                        </div>

                    </div>
                </div>
            </section>

            <section className="categories">
                <div className="wrap">

                    <div className="section-head">
                        <h2>
                            Built for businesses like yours.
                        </h2>
                    </div>

                    <div className="cat-grid">

                        <Link
                            to="/websites?category=engineering"
                            className="cat-card"
                        >
                            Engineering <span className="arrow">→</span>
                        </Link>

                        <Link
                            to="/websites?category=construction"
                            className="cat-card"
                        >
                            Construction <span className="arrow">→</span>
                        </Link>

                        <Link
                            to="/websites?category=technology"
                            className="cat-card"
                        >
                            Solar &amp; Energy <span className="arrow">→</span>
                        </Link>

                        <Link
                            to="/websites?category=real-estate"
                            className="cat-card"
                        >
                            Real Estate <span className="arrow">→</span>
                        </Link>

                        <Link
                            to="/websites?category=restaurants"
                            className="cat-card"
                        >
                            Restaurants <span className="arrow">→</span>
                        </Link>

                        <Link
                            to="/websites?category=healthcare"
                            className="cat-card"
                        >
                            Healthcare <span className="arrow">→</span>
                        </Link>

                        <Link
                            to="/websites?category=education"
                            className="cat-card"
                        >
                            Education <span className="arrow">→</span>
                        </Link>

                        <Link
                            to="/websites?category=business"
                            className="cat-card"
                        >
                            Corporate <span className="arrow">→</span>
                        </Link>

                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="wrap">

                    <div className="section-head">
                        <h2>
                            Businesses we've helped get online.
                        </h2>
                    </div>

                    <div className="test-grid">

                        <div className="test-card">
                            <p className="test-quote">
                                "Our new site went live faster than we
                                expected, and it actually looks like us.
                                Customers mention it all the time."
                            </p>

                            <p className="test-name">John Doe</p>
                            <p className="test-company">Company</p>
                        </div>

                        <div className="test-card">
                            <p className="test-quote">
                                "We didn't have to explain our business from
                                scratch — the template already understood
                                what we do."
                            </p>

                            <p className="test-name">Igba Cathy</p>
                            <p className="test-company">Company</p>
                        </div>

                        <div className="test-card">
                            <p className="test-quote">
                                "Simple process, clear pricing, and the
                                WhatsApp integration alone has brought in
                                new enquiries."
                            </p>

                            <p className="test-name">Amao John</p>
                            <p className="test-company">Company</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="faq">
                <div className="wrap faq-inner">

                    <div className="section-head center">
                        <h2>
                            Frequently asked questions.
                        </h2>
                    </div>

                    <div className="faq-list">

                        <div
                            className={`faq-item ${openIndex === 0 ? 'open' : ''
                                }`}
                        >
                            <button
                                type="button"
                                className="faq-q"
                                onClick={() => toggleFAQ(0)}
                            >
                                Can I customise the website?
                                <span className="plus"></span>
                            </button>

                            <div className="faq-a">
                                <p>
                                    Yes. Every website is customised with
                                    your branding, colours, content and
                                    images before it goes live.
                                </p>
                            </div>
                        </div>

                        <div
                            className={`faq-item ${openIndex === 1 ? 'open' : ''
                                }`}
                        >
                            <button
                                type="button"
                                className="faq-q"
                                onClick={() => toggleFAQ(1)}
                            >
                                Can I request additional features?
                                <span className="plus"></span>
                            </button>

                            <div className="faq-a">
                                <p>
                                    Yes. Beyond the standard customisation,
                                    you can request extra features to suit
                                    your business needs.
                                </p>
                            </div>
                        </div>

                        <div
                            className={`faq-item ${openIndex === 2 ? 'open' : ''
                                }`}
                        >
                            <button
                                type="button"
                                className="faq-q"
                                onClick={() => toggleFAQ(2)}
                            >
                                How long does it take?
                                <span className="plus"></span>
                            </button>

                            <div className="faq-a">
                                <p>
                                    Because you're starting from a ready-made
                                    design, most websites are customised and
                                    ready much faster than a build from scratch.
                                </p>
                            </div>
                        </div>

                        <div
                            className={`faq-item ${openIndex === 3 ? 'open' : ''
                                }`}
                        >
                            <button
                                type="button"
                                className="faq-q"
                                onClick={() => toggleFAQ(3)}
                            >
                                Do I need to provide the content?
                                <span className="plus"></span>
                            </button>

                            <div className="faq-a">
                                <p>
                                    You'll provide your business details,
                                    images and copy — we'll guide you on
                                    exactly what's needed and help fit it
                                    into the design.
                                </p>
                            </div>
                        </div>

                        <div
                            className={`faq-item ${openIndex === 4 ? 'open' : ''
                                }`}
                        >
                            <button
                                type="button"
                                className="faq-q"
                                onClick={() => toggleFAQ(4)}
                            >
                                Can you help with my domain and hosting?
                                <span className="plus"></span>
                            </button>

                            <div className="faq-a">
                                <p>
                                    Yes. We can help connect your domain and
                                    deploy your website so it's live and
                                    ready for visitors.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="final-cta">
                <div className="wrap">

                    <p className="eyebrow on-dark">
                        Ready to get started?
                    </p>

                    <h2>
                        Your next website starts here.
                    </h2>

                    <p>
                        Browse our collection, choose a design you love,
                        and let us make it yours.
                    </p>

                    <Link
                        to="/websites"
                        className="btn btn-accent"
                    >
                        Browse Websites
                        <span className="arrow">→</span>
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

export default Home;