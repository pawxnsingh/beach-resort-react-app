import React, { useContext } from "react";
import Loading from "./Loading";
import { RoomContext } from "../ContextApi";
import Title from "./Title";
import Room from "./Room";

const FeatureRoom = () => {
    let { featuredRooms, loading } = useContext(RoomContext);

    // conditional rendering
    if (loading === true) {
        return <Loading />;
    }

    return (
        <section className="feature-room">
            <Title title="Featured Room" />
            <div className="featured-rooms-center">
                {/* here we need to map the featureedRooms object and generate the featured rooms */}

                {featuredRooms.map((room,index) => {
                    // reutrn is the most crucial part
                    return <Room key={index} room={room} />;
                })}
                
            </div>
        </section>
    );
};
export default FeatureRoom;
