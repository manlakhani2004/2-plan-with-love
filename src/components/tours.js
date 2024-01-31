import React from "react";
import './tours.css';
import Card from "./card";

function Tours(props) {
    return (
        <div className="tour-container">
            <div className="tour-heading">
                <h1>Plan With Love</h1>
            </div>
            <div className="package-container">
                {props.packages.map((tour) => {
                    //1 with props name
                    return <Card key={tour.id} tour={tour} removeTour={props.removeTour}></Card>;

                    // or 
                    //2 without props name
                    // return <Card {...tour}></Card>
                })}
            </div>
        </div>
    );
}

export default Tours;