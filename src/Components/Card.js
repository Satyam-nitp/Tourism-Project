import React from "react";
import ScrollImg from './ScrollImg';

function Card({items}){
    console.log(items);
    return (
        <div className="card">
            {items.map((temple) => (
                <ScrollImg key={temple.id} id={temple.id} name={temple.name} info={temple.info} fav={temple.fav}/>
            ))}
        </div>
    );
}

export default Card;


