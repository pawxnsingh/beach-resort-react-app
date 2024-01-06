import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg"
//

const Room = ({ room }) => {
    // we need image price and slug to be displayed on the picture
    const { images, price, slug } = room;
    return (
        <article className="room">
            <div className="img-container">
                {/* here we can import a default, I a Case in which our image we arent able to render the org img */}
                <img src={images[0] || defaultImg} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    features
                </Link>
            </div>
            <p className="room-info">{slug}</p>
        </article>
    );
};
export default Room;



// what is propTypes