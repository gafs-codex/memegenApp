import { useState, useEffect } from "react";
function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const { value, name } = event.currentTarget
        // console.log(value);
        setMeme((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        const url = "https://api.imgflip.com/get_memes"
        fetch(url)
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMeme() {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        const randomMeme = allMemes[randomIndex];
        setMeme((prev) => {
            return {
                ...prev,
                imageUrl: randomMeme.url
            }
        })
    }
    return (
        <main>
            <div className="form">

                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={getMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}
export default Main;