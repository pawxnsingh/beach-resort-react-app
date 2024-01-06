import React from "react";
import Room from "./Room";

const RoomsList = ({ rooms }) => {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>No Room available as you parameter</h3>
            </div>
        );
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map((item, index) => {
                    return <Room key={index} room={item} />;
                })}
            </div>
        </section>
    );
};
export default RoomsList;
