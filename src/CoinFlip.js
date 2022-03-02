import { useState } from "react";
import './CoinFlip.css';

/** Flip coin and counts the head and tail image shows
 * 
 * Props:
 *  - an array of images [{head}, {tail}]
 * 
 * State:
 *  - two counters for both sides separately
 *  - images
 * 
 * App -> CoinFlip
 */



function CoinFlip({props}) {
    const [image, setImage] = useState(null);
    
    let [headCount, setHeadCount] = useState(0);
    let [tailCount, setTailCount] = useState(0);
    function handleClick() {
        if(image === props[0].head){
            setHeadCount(headCount+1);
        }
        if(image === props[1].tail){
            setTailCount(tailCount+1);
        }
        setImage(image === props[0].head ? props[1].tail: props[0].head);
        
    }

    return(
        <div className="CoinFlip">
            {image && <img className="CoinFlip-img" src={image}/>}
            <button className="CoinFlip-btn" onClick={handleClick}>
                Flip MEEE
            </button>
            { <p>Head Count: {headCount}</p>}
            { <p>Tail Count: {tailCount}</p>}
        </div>
    );
}

export default CoinFlip;