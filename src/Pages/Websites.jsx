import { useState } from 'react';
import './Websites.css';
import './Home.css';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

function Websites() {

    const [activeFilter, setActiveFilter] = useState("all");

    const websites = [
        {
            id: 1,
            categories: ["engineering", "construction"],
            tag: "Engineering",
            title: "Engineering Pro",
            category: "Engineering & Construction",
            price: "₦380,000",
            link: "/#"
        },
        {
            id: 2,
            categories: ["technology", "business"],
            tag: "Solar & Energy",
            title: "SolarTech",
            category: "Solar & Renewable Energy",
            link: "/#",
            price: "₦350,000"
        },
        {
            id: 3,
            categories: ["construction", "real-estate"],
            tag: "Construction",
            title: "BuildPro",
            category: "Construction & Property Development",
            price: "₦400,000",
            link: "/#"
        },
        {
            id: 4,
            categories: ["real-estate", "business"],
            tag: "Real Estate",
            title: "Real Estate Pro",
            category: "Real Estate & Property Listings",
            price: "₦370,000",
            link: "/#"
        },
        {
            id: 5,
            categories: ["restaurants", "business"],
            tag: "Restaurants",
            title: "TableFirst",
            category: "Restaurants & Hospitality",
            price: "₦320,000",
            link: "/#"
        },
        {
            id: 6,
            categories: ["healthcare", "business"],
            tag: "Healthcare",
            title: "ClinicCare",
            category: "Healthcare & Clinics",
            price: "₦360,000",
            link: "/#"
        },
        {
            id: 7,
            categories: ["education", "business"],
            tag: "Education",
            title: "EduHub",
            category: "Schools & Education",
            price: "₦340,000",
            link: "/#"
        },
        {
            id: 8,
            categories: ["business", "technology"],
            tag: "Corporate",
            title: "Corporate Edge",
            category: "Corporate & Professional Services",
            price: "₦390,000",
            link: "/#"
        }
    ];

    const filters = [
        { name: "All", value: "all" },
        { name: "Business", value: "business" },
        { name: "Engineering", value: "engineering" },
        { name: "Construction", value: "construction" },
        { name: "Technology", value: "technology" },
        { name: "Real Estate", value: "real-estate" },
        { name: "Restaurants", value: "restaurants" },
        { name: "Healthcare", value: "healthcare" },
        { name: "Education", value: "education" }
    ];

    const filteredWebsites =
        activeFilter === "all"
            ? websites
            : websites.filter((website) =>
                website.categories.includes(activeFilter)
            );

    return (
        <>
            <div>
                <Navbar />

                <section className="page-hero">
                    <div className="wrap">
                        <p className="eyebrow">Our Collection</p>

                        <h1>
                            Find the best fit for your business.
                        </h1>

                        <p>
                            Explore our professionally designed websites.
                            Choose the design you love, and we'll customise
                            it for your business.
                        </p>
                    </div>
                </section>

                <div className="filters-bar">
                    <div className="wrap">

                        <div className="filters" id="filters">

                            {filters.map((filter) => (
                                <button
                                    key={filter.value}
                                    className={`filter-btn ${
                                        activeFilter === filter.value
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setActiveFilter(filter.value)
                                    }
                                >
                                    {filter.name}
                                </button>
                            ))}

                        </div>

                        <p className="result-count" id="resultCount">
                            <strong>{filteredWebsites.length}</strong>{" "}
                            website{filteredWebsites.length === 1 ? "" : "s"}
                        </p>

                    </div>
                </div>

                <section className="catalogue" id="catalogue">
                    <div className="wrap">

                        <div className="cards-grid" id="cardsGrid">

                            {filteredWebsites.map((website) => (

                                <Link
                                    to={website.link}
                                    className="card"
                                    key={website.id}
                                >

                                    <div className="card-thumb">
                                        <span className="tag">
                                            {website.tag}
                                        </span>
                                    </div>

                                    <h3>{website.title}</h3>

                                    <p className="cat-label">
                                        {website.category}
                                    </p>

                                    <div className="card-foot">

                                        <div className="card-price">
                                            {website.price}
                                            <span>starting from</span>
                                        </div>

                                        <span className="card-link">
                                            View Website →
                                        </span>

                                    </div>

                                </Link>

                            ))}

                        </div>

                        {filteredWebsites.length === 0 && (
                            <div className="empty-state show" id="emptyState">

                                <h3>
                                    Nothing in this category yet.
                                </h3>

                                <p>
                                    We're still adding websites here.
                                    Tell us what you need and we can build
                                    it as a custom website instead.
                                </p>

                                <Link
                                    to="/contact"
                                    className="btn btn-primary"
                                >
                                    Request Custom Website
                                    <span className="arrow">→</span>
                                </Link>

                            </div>
                        )}

                    </div>
                </section>

                <section className="custom-strip">
                    <div className="wrap">

                        <div>
                            <h3>Don't see the right fit?</h3>

                            <p>
                                We can build something tailored specifically
                                to your business.
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="btn"
                            style={{
                                background: "var(--SOFTSAGE)",
                                color: "var(--DEEPNAVY)"
                            }}
                        >
                            Request Custom Website
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

export default Websites;