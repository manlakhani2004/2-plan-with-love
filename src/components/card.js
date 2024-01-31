import React, { useState } from "react";
import './card.css';
// 1 with props name
function Card(props)
{
    const[Greaterthn200,setReadmore] = useState(true);
    function handleReadmore()
    {   
        setReadmore(!Greaterthn200);
    }

    let desc = (Greaterthn200)?`${props.tour.info.substring(0,200)}....`:props.tour.info;

    return(
        <div className="packag">
            <div className="package-img">
                    <img src={props.tour.image} className="packageimage" alt="Image Not Found"></img>
            </div>
            <div className="package-content">
                <p className="package-price">₹ {props.tour.pirce}</p>
                <p className="package-name">{props.tour.name}</p>
                <p className="package-desc">{desc}<span className="showcontent" onClick={handleReadmore}>{(Greaterthn200)?'ShowMore':'ShowLess'}</span></p>   
            </div>
            <div className="notInterest-btn-container">
                <button className="notInt-btn" onClick={function(){props.removeTour(props.tour.id)}}>Not Interested</button>
            </div>
        </div>
    );
}



// 2 without props name 
// function Card({id,name,info,pirce})
// {
//     return(
//         <div className="package-container">
//             <div className="package-img">
//                     <img src={image} alt="Image Not Found"></img>
//             </div>
//             <div className="package-content">
//                 <p className="package-price">{pirce}</p>
//                 <p className="package-name">{name}</p>
//                 <p className="package-desc">{info}</p>   
//             </div>
//             <div className="notInterest-btn-container">
//                 <button className="notInt-btn">Not Interested</button>
//             </div>
//         </div>
//     );
// }



export default Card;