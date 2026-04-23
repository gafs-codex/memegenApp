import React from "react";
import './wind.css'
function Window() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
        const watchWindowWidth = () => {
            console.log("resized");
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWindowWidth)
        return function () {
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
export default Window;