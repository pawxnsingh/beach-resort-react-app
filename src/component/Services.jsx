import React, { useState } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

const Services = () => {
    const [services] = useState([
        {
            icon: <FaCocktail />,
            title: "Free CockTail",
            info: "Non-alcoholic refreshment, endless flavors for vibrant social experiences.",
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: "Posess the joy of hiking adventure with loving one's",
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Shutle",
            info: "Explore the best monuments in the city with Resort Shuttle",
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: "Because no great story ever started with someone eating a salad, that why we offer beer",
        },
    ]);

    return (
        <section className="services">
            <Title title="Our Services" />

            {/*
             * below the service title we will have four section
             * free mocktail
             * endless hiking
             * free shuttle
             * strongest beer
             */}

            {/* four section */}
            {/* now we are maintaing the state so we have to use that state and render all services*/}

            {/* always write js in jsx using curly parenthesis */}
            <div className="services-center">
                {services.map((item, index) => {
                    return (
                        <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
export default Services;
