import React from "react";

// this children is the graphic or the button to show all the rooms inside the
// so try to make it reusable compoenet
const Hero = ({ children, hero }) => {
    return (
        // {/* just the normal tag */}
        <header className={hero}>{children} </header>
    );
};

// this is the default props
Hero.defaultProps = {
    hero: "defaultHero",
};
export default Hero;
