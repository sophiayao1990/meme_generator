import { useState } from 'react'
import '../App.css'
import memesData from '../memesData'

function Main() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage:"http://i.imgflip.com/1bij.jpg"})
    function handleClick(){
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                randomImage: memesArray[randomNum].url
            }
        })
        // setMemeImage(memesArray[randomNum].url)
    }
    return(
        <main>
            <div action="">
                <input type="text" placeholder='top-msg' />
                <input type="text" placeholder='bottom-msg' />
                <button onClick={handleClick} >Get a new meme image 🖼</button>
            </div>
            <img src={meme.randomImage} alt="memeImage" className='meme-image' />
        </main>
    )
}

export default Main