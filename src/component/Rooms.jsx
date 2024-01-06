import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import RoomContainer from "./RoomContainer";
import { Link } from "react-router-dom";

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
				<Banner title="Our Best Room"> 
					<Link to="/" className="btn-primary">Return Home</Link>
				</Banner>
			</Hero>


            <RoomContainer  />

            



        </>
    );
};

export default Rooms;
