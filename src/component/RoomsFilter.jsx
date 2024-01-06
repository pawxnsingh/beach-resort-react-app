import React from "react";
import { useContext } from "react";
import { RoomContext } from "../ContextApi";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
    // react hooks
    const context = useContext(RoomContext);
    const {
        handleThisChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
    } = context;

    // get unique types
    let types = getUnique(rooms, "type");
    // add all
    types = ["all", ...types];
    // map to jsx
    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));
    // get unique capacity
    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            {/* we use new tag when we have to make new input */}
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        onChange={handleThisChange}
                        className="form-control"
                        value={type}
                    >
                        {types}
                    </select>
                </div>
                {/* end of select type */}
                {/* guests  */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        onChange={handleThisChange}
                        className="form-control"
                        value={capacity}
                    >
                        {people}
                    </select>
                </div>
                {/* end of guests */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleThisChange}
                        className="form-control"
                    />
                </div>
                {/* end of room price*/}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="price">room size </label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            value={minSize}
                            onChange={handleThisChange}
                            className="size-input"
                        />
                        <input
                            type="number"
                            name="maxSize"
                            value={maxSize}
                            onChange={handleThisChange}
                            className="size-input"
                        />
                    </div>
                </div>
                {/* end of select type */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleThisChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            checked={pets}
                            onChange={handleThisChange}
                        />
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>
                {/* end of extras type */}
            </form>
        </section>
    );
};

export default RoomsFilter;
