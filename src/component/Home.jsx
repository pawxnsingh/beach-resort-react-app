import React, { useContext } from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Services from "./Services";
import FeatureRoom from "./FeatureRoom";

// now we need the data to be passed to the FeatureRoom and we need to use the useContext hooks

const Home = () => {
    // const featurerooms = useContext();
    // console.log(featurerooms);

    return (
        // this is the home and we are going to have the big banner which is called hero
        // at the top of the Home Componenet
        <>
            <Hero>
                <Banner
                    // className="btn-primary"
                    title="luxurious rooms"
                    subtitle="delux room starting at $299"
                >
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms{" "}
                    </Link>
                </Banner>
            </Hero>

            <Services />
            <FeatureRoom />
        </>
    );
};

export default Home;
