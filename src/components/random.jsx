import React from "react"
import './rand.css'
function Random() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    console.log("Rendered!")

    React.useEffect(() => {
        // console.log("Effect ran")
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
export default Random;