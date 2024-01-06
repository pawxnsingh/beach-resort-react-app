import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <Hero>
				<Banner title="404" subtitle="This Room Doesn't Exist">
					<Link to="/" className="btn-primary">Home</Link>
				</Banner>
			</Hero>
        </div>
    );
};

export default Error;
