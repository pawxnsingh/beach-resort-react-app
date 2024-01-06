// here he says that it is going to be class based componenet
import React, { useContext } from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../ContextApi";
// this is  the styled-component basically used for the dynamic hero
import StyledHero from "./styledHero";

// in this we are trying to write in styled-component
const SingleRoom = () => {
    // we are reciving getRoom as function
    const { getRoom } = useContext(RoomContext);
    const { slug } = useParams();
    const roomDetails = getRoom(slug);

    // call function error page it that room associated with that slug doesn't exist
    if (!roomDetails) {
        return (
            <div className="error">
                <h6>Room Not Found...</h6>
                <Link to="/rooms" className="btn-primary">
                    Back To Room
                </Link>
            </div>
        );
    }

    // destructuring all the room details
    const {
        name,
        type,
        price,
        breakfast,
        capacity,
        description,
        extras,
        images,
        pets,
        size,
    } = roomDetails;
    const [mainImg, ...remainImg] = images;

    return (
        <>
            {/* this is the top hero banner and this is the head of the room  */}
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>

            {/* this gonna have all the image related to the rooms */}
            <section className="single-room">
                <div className="single-room-images">
                    {remainImg.map((item, index) => {
                        return <img key={index} src={item} />;
                    })}
                </div>

                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>

                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price : ${price}</h6>
                        <h6>Size : ${size} SQFT</h6>
                        <h6>
                            max Capacity : {capacity}{" "}
                            {capacity > 1 ? "People" : "Person"}
                        </h6>
                        <h6>{pets ? "Pets Are Allowed" : "No Pets Allowed"}</h6>
                        <h6>{breakfast && "Free Breakfast Included"}</h6>
                    </article>
                </div>
            </section>

            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li>{item}</li>;
                    })}
                </ul>
            </section>
        </>
    );
};

export default SingleRoom;
