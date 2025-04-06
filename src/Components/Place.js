
import React from "react";
import temples from './data';


function Place({cardHandler}){
    return (
        <div className='place'>
            <h2 className="placeHeading">Places to visit in Vrindavan</h2>
            {/* <p className="placePara">{'Vrindavan is a town in the Mathura district of Uttar Pradesh, India. It is the site of an ancient forest which is the region where Lord Krishna spent his childhood days. The town is about 11 kilometers away from Mathura, Krishna's birthplace on the Agra-Delhi highway.'}</p> */}
            <span className="fav" onClick={() => cardHandler('fav')}>Favourite List</span>
            <span className="all" onClick={() => cardHandler('All')}>All places & temples</span>
            <ul className="placeList">
                {temples.map((temple) => {
                    return (
                        <li key={temple.id} onClick={() => {cardHandler(temple.id)}}>
                            {temple.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Place;