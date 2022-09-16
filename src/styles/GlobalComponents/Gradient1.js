import React from "react";

const Gradient1 = () => {
    const PinkGradient = {
        position: "absolute",
        zIndex: "-10",
        width: "60%",
        height: "85%",
        top: "0px",
        borderRadius: "50%",
        opacity: "0.4",
        background: "#945cd7",
        transform: "translateX(-60%) translateY(-60%)",
        filter: "blur(200px)",
    };

    const WhiteGradient = {
        position: "absolute",
        zIndex: "-9",
        width: "40%",
        height: "40%",
        borderRadius: "100%",
        bottom: "10rem",
        opacity: "0.4",
        background: "rgba(255, 255, 255, 1)",
        transform: "translateY(-200%) translateX(20%)",
        filter: "blur(200px)",
    };

    const BlueGradient = {
        position: "absolute",
        zIndex: "-10",
        width: "40%",
        height: "45%",
        right: "15rem",
        opacity: "0.75",
        background: "linear-gradient(45deg, #3895cb 0%, #214d76 100%)",
        transform: "translateX(40%) translateY(-220%)",
        filter: "blur(200px)",
    };

    return (
        <>
            <span style={PinkGradient}></span>
            <span style={WhiteGradient}></span>
            <span style={BlueGradient}></span>
        </>
    );
};

export default Gradient1;
