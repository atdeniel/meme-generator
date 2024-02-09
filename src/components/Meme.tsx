
//import memesData from '../data/memesData'
import { useState, useEffect } from 'react'


function Meme() { 

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    //const [allMemeImages, setAllMemeImages] = useState(memesData)
    const [allMemeImages, setAllMemeImages] = useState({})
 
    function getMemeImage(){
        let data = allMemeImages.data
        const randomPosition = Math.floor(Math.random() * data.memes.length);
        console.log(data.memes[randomPosition])
        const url = data.memes[randomPosition].url
        setMeme( prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    useEffect(function() {
        console.log('looking the memes')
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
    }, [])

    // Traditional to use async
    // useEffect(async () => {
    //     const res = await fetch("https://api.imgflip.com/get_memes")
    //     const data = await res.json()
    //     setAllMemeImages(data.data.memes)
    // }, [])

    return (
        <div className="meme__form--classic">
            {/* <form onSubmit={handleSubmit}> */}
                <input name="topText" onChange={handleChange} value={meme.topText} type="text" placeholder="Top text" className="meme__input"></input>
                <input name="bottomText" onChange={handleChange} value={meme.bottomText} type="text" placeholder="Bottom text" className="meme__input"></input>
                <button onClick={getMemeImage} className="meme__button">
                    Get a new meme image 🖼
                </button>
            {/* </form> */}
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}


export default Meme
