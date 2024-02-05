
import memesData from '../data/memesData'
import { useState } from 'react'


function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)
 
    function getMemeImage(){
        let data = memesData.data
        const randomPosition = Math.floor(Math.random() * data.memes.length);
        console.log(data.memes[randomPosition])
        const url = data.memes[randomPosition].url
        setMeme( prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    return (
        <div className="meme__form--classic">
            <input type="text" placeholder="Top text" className="meme__input"></input>
            <input type="text" placeholder="Bottom text" className="meme__input"></input>
            <button onClick={getMemeImage} className="meme__button">
                Get a new meme image 🖼
            </button>
            <img src={meme.randomImage} className="meme__img">
            </img>
        </div>
    )
}


export default Meme
