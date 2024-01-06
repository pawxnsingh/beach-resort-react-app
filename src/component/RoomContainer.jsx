import React, { useContext } from "react";
import RoomsList from "./RoomsList";
import Loading from "../component/Loading";
import RoomsFilter from "./RoomsFilter";
import { RoomContext } from "../ContextApi";

const RoomContainer = () => {
    const { rooms, sortedRooms, loading } = useContext(RoomContext);

    if (loading === true) {
        return <Loading />;
    }

    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    );
};
export default RoomContainer;
