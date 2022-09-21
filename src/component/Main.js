import '../App.css'
import memesData from '../memesData'

function Main() {
    function handleClick(){
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url
        console.log(url)
    }
    return(
        <main>
            <div action="">
                <input type="text" placeholder='top-msg' />
                <input type="text" placeholder='bottom-msg' />
                <button onClick={handleClick} >Get a new meme image 🖼</button>
            </div>
        </main>
    )
}

export default Main