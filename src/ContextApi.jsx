import React, { Component } from "react";
import client from "./contentful";
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,

        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    };

    // get data from the contennful
    getData = async () => {
        try {
            const response = await client.getEntries({
                content_type: "beachResortRooms",
                order: "sys.createdAt",
            });

            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter((room) => room.featured === true);
            // we are gonna find in the data which will have max price and size and update the state
            let maxPrice = Math.max(...rooms.map((item) => item.price));
            let maxSize = Math.max(...rooms.map((item) => item.size));
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize,
            });
        } catch (error) {
            console.log(error);
        }
    };

    // componentDidMount is equivalent to useEffect()
    componentDidMount() {
        this.getData();
    }

    formatData(items) {
        let tempItems = items.map((item) => {
            let id = item.sys.id;
            let images = item.fields.images.map(
                (image) => image.fields.file.url
            );

            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    }

    // now we have already structured the data and maded the perfect for our use
    // and we have to use it in the page when we click on the rooms
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug === slug);
        return room;
    };

    // this handle state will get passed to the context api
    handleThisChange = (event) => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState(
            // this is called computed property names - this will allow us to write state Variable expression
            // on runtime
            {
                [name]: value,
            },
            this.filterRooms
        );
    };

    // this filter function will gets attached to handleChange
    filterRooms = () => {
        // we have to filter the room as per the user input
        // so the input we get as per the
        /**
         * roomtype
         * capacity
         * price
         * size
         * pet
         * breakfast
         */
        let { rooms, type, capacity, price, pet, breakfast, minSize, maxSize } =
            this.state;

        // make a copy of the room in order to maintain the original copy of it
        let tempRoom = [...rooms];

        // filter the room as per the room type
        if (type !== "all") {
            tempRoom = tempRoom.filter((room) => room.type === type);
        }

        // filter the room as per the capacity of person/people that an room can accomodate
        if (capacity !== 1) {
            tempRoom = tempRoom.filter((room) => room.capacity >= capacity);
        }

        // filter rooms as per the price confired through slider
        tempRoom = tempRoom.filter((room) => room.price <= price);

        // filter rooms as per the min and max size
        tempRoom = tempRoom.filter(
            (room) => room.size >= minSize && room.size <= maxSize
        );

        // as per the two tickmark first is breakfast and another is pet allowed
        if (breakfast) {
            tempRoom = tempRoom.filter((room) => room.breakfast === true);
        }

        if (pet) {
            tempRoom = tempRoom.filter((room) => room.pets == true);
        }

        this.setState({
            sortedRooms: tempRoom,
        });
    };

    render() {
        return (
            <RoomContext.Provider
                value={{
                    // this means all the value state variable will get copied from here
                    ...this.state,
                    // we passed this in the context api as a function
                    // getRoom is function has the which is in the
                    // current object that why we use this.getRoom
                    getRoom: this.getRoom,
                    handleThisChange: this.handleThisChange,
                }}
            >
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

export { RoomProvider, RoomContext };
