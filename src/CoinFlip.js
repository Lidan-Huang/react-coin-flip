import { useState } from "react";


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

// const props = [{head: head_url,}, {tail: tail_url}];

function CoinFlip({props}) {
    const [image, setImage] = useState(null);

    function handleClick() {
        setImage(image === props[0].head ? props[1].tail : props[0].head);
    }

    return(
        <div className="CoinFlip">
            
            <button className="CoinFlip_btn" onClick={handleClick}>
                Flip MEEE
            </button>
        </div>
    );
}
